import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const index = async (req:Request,res:Response) =>{
  
  try {   
    const items = await prisma.items.findMany();
    res.json(items);
  } catch (error) {
    res.status(505).json({error:'Error al conectar las base de datos'})
  }
}

export const store = async (req:Request,res:Response) =>{
  
  try {
    const {description,subListaId,referencias} = req.body
    const nuevaLista = await prisma.items.create({
      data:{
        description,
        referencias,
        subListaId: parseInt(subListaId)
      }
    })
    res.json(nuevaLista);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo item" });
  } 
}

export const update = async (req:Request,res:Response) =>{
  try {
    const {description,subListaId,referencias} = req.body;
    const {idItems} = req.params;
    const nuevaLista = await prisma.items.update({
      where:{id:parseInt(idItems)},
      data:{
        description,
        referencias,
        subListaId: parseInt(subListaId)
      }
    })
    res.json(nuevaLista);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo item" });
  } 
}

export const destroy = async (req:Request,res:Response) =>{

  try {
    const {idItems} = req.params;
    const nuevaLista = await prisma.items.delete({
      where:{id:parseInt(idItems)}
    })
    res.json(nuevaLista);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo item" });
  } 
}


export const show = async (req:Request,res:Response) =>{
  try {
  
    const {idItems} = req.params;
    const nuevaLista = await prisma.items.findUnique({
      where:{id:parseInt(idItems)},
    })
    res.json(nuevaLista);
  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo item" });
  } 
}