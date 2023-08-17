import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const index = async (req:Request,res:Response) =>{
  
  try {   
    const lista = await prisma.listaPrincipal.findMany();
    res.json(lista);

  } catch (error) {
    res.status(505).json({error:'Error al conectar las base de datos'})
  }
}

export const store = async (req:Request,res:Response) =>{
  try {
    
    const {nombre} = req.body
    const nuevaLista = await prisma.listaPrincipal.create({
      data:{
        nombre: nombre
      }
    })

    res.json(nuevaLista);

  } catch (error) {
    res.status(500).json({ error: "Error al crear un nuevo item" });
  } 
}

export const update = async (req:Request,res:Response) =>{

  try{
    const {nombre} = req.body;
    const {idLista}  = req.params
    const updateLista = await prisma.listaPrincipal.update({
      where: {id: parseInt(idLista) },
      data: {
        nombre
      }
    })
    
    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al actualizar una lista"})
  }
}

export const del = async (req:Request,res:Response) =>{

  try{
    const {idLista}  = req.params
    const updateLista = await prisma.listaPrincipal.delete({
      where: {id: parseInt(idLista) }
    })

    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al borrar una lista"})
  }
}

export const show = async (req:Request,res:Response) =>{
  try{
    const {idLista}  = req.params
    const updateLista = await prisma.listaPrincipal.findUnique({
      where: {id: parseInt(idLista) }
    })

    res.json(updateLista);
  }catch(error){
    res.status(500).json({error: "Error al borrar una lista"})
  }
}