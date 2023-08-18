import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { index } from "../../src/controllers/Lista";

interface props{
  json: jest.Mock<any,any,any>,
  status: jest.Mock<any,any,any>
}
const prisma = new PrismaClient();


describe("index",()=>{
  test("return listas", async ()=>{
    const req = {} as Request
    const res = <any>{
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    } as Response;
    
      const lista = [{id:1,description:"item1"},{id:2,description:"item2"}];
    
      jest.spyOn(prisma.listaPrincipal,"findMany").mockRejectedValueOnce(lista);
      
      await index(req,res);

      expect(res.json).toHaveBeenCalledWith(lista);
      expect(res.status).not.toHaveBeenCalled();
  })

});