import express from "express";
import { del, index, show, store, update } from "../controllers/Items";

const ItemsRouter = express.Router();

ItemsRouter.get('/',index);
ItemsRouter.post('/',store);
ItemsRouter.get('/:idItems',show);
ItemsRouter.put('/:idItems',update);
ItemsRouter.put('/:idItems',del);


export default ItemsRouter;