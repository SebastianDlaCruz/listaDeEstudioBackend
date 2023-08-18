import express from "express";
import { destroy, index, show, store, update } from "../controllers/Items";
const ItemsRouter = express.Router();

ItemsRouter.get("/",index);
ItemsRouter.get("/:idItems",show);
ItemsRouter.post("/",store);
ItemsRouter.put("/:idItems",update);
ItemsRouter.delete("/:idItems",destroy);
export default ItemsRouter; 