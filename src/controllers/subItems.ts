import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const index = async (req:Request,res:Response) =>{
  
  try {   
    const subLista = await prisma.subLista.findMany();
    res.json(subLista);
  } catch (error) {
    res.status(505).json({error:'Error al conectar las base de datos'})
  }
}

export const store = async (req:Request,res:Response) =>{
  
  try {
    const {nombre,idLista,type} = req.body
    const nuevaLista = await prisma.subLista.create({
      data:{
        nombre: nombre,
        type,
        listaPrincipalId: parseInt(idLista)
      }
    })
    res.json(nuevaLista);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo item" });
  } 
}

export const update = async (req:Request,res:Response) =>{

  try{
    const {nombre,type,idLista} = req.body;
    const {idSub}  = req.params
    const updateLista = await prisma.subLista.update({
      where: {id: parseInt(idSub) },
      data: {
        nombre,
        type,
        listaPrincipalId: parseInt(idLista)
      }
    })
    
    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al actualizar una lista"})
  }
}

export const destroy = async (req:Request,res:Response) =>{

  try{
    const {idSub}  = req.params
    const updateLista = await prisma.subLista.delete({
      where: {id: parseInt(idSub) },
    })
    
    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al actualizar una lista"})
  }
}

export const show = async (req:Request,res:Response) =>{
  try{
    const {idSub}  = req.params
    const updateLista = await prisma.subLista.findUnique({
      where: {id: parseInt(idSub) }
    })

    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al borrar una lista"})
  }
}