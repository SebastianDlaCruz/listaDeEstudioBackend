import express from "express";
import { del, index, show, store, update } from "../controllers/Lista";

const ListaRouter = express.Router();

ListaRouter.get("/",index);
ListaRouter.get("/:idLista",show);
ListaRouter.post("/",store);
ListaRouter.put("/:idLista",update);
ListaRouter.delete("/:idLista",del);

export default ListaRouter;