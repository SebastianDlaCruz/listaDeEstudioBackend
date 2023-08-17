import express from "express";
import { del, index, show, store, update } from "../controllers/SubLista";
const SubListaRouter = express.Router();

SubListaRouter.get('/',index);
SubListaRouter.get("/:idLista",show);
SubListaRouter.post('/:idLista',store);
SubListaRouter.put('/:idSub',update);
SubListaRouter.delete('/:idSub',del);

export default SubListaRouter;