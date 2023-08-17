import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import ItemsRouter from "./src/routers/items";
import ListaRouter from "./src/routers/lista";
import SubListaRouter from "./src/routers/subLista";

const app = express()
const port = process.env.PORT;


app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));

app.use("/",ListaRouter);
app.use("/sub-lista",SubListaRouter);
app.use("/items",ItemsRouter);


app.listen(port, () => {
  console.log(`liver serve: ${port}`)
})