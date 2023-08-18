import express from "express";
import { destroy, index, show, store, update } from "../controllers/Lista";

const ListaRouter = express.Router();

ListaRouter.get("/",index);
ListaRouter.get("/:idLista",show);
ListaRouter.post("/",store);
ListaRouter.put("/:idLista",update);
ListaRouter.delete("/:idLista",destroy);

export default ListaRouter; 