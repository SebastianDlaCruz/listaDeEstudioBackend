import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const index = async (req:Request,res:Response) =>{
  
  try {
    
    const lista = await prisma.items.findMany();
    res.json(lista);

  } catch (error) {
    res.status(505).json({error:'Error al conectar las base de datos'})
  }
}

export const store = async (req:Request,res:Response) =>{
  try {
    
    const {description,referencias} = req.body;
    const nuevaLista = await prisma.items.create({
      data:{
        description,
        referencias,
      }
    })

    res.json(nuevaLista);

  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo item" });
  } 
}

export const update = async (req:Request,res:Response) =>{

  try{
    const {description,referencias,idSud} = req.body;
    const {idItems}  = req.params
    const updateLista = await prisma.items.update({
      where: {id: parseInt(idItems)},
      data: {
        description,
        referencias,
        subListaId: parseInt(idSud)
      }
    })
    
    res.json(updateLista);
  }catch(error){

    res.status(500).json({error: "Error al actualizar una lista"})
  }
}

export const del = async (req:Request,res:Response) =>{

  try{
    
    const {idItems}  = req.params
    const updateLista = await prisma.items.delete({
      where: {id: parseInt(idItems) }
    })

    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al borrar una lista"})
  }
}


export const show = async(req:Request,res:Response) =>{

  try{ 
    const {idItem}  = req.params
    const updateLista = await prisma.items.findUnique({
      where: {id: parseInt(idItem) }
    })

    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al borrar una lista"})
  }
}