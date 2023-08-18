import express from "express";
import { destroy, index, show, store, update } from "../controllers/subItems";

const SubListaRouter = express.Router();

SubListaRouter.get("/",index);
SubListaRouter.get("/:idSub",show);
SubListaRouter.post("/",store);
SubListaRouter.put("/:idSub",update);
SubListaRouter.delete("/:idSub",destroy);

export default SubListaRouter;