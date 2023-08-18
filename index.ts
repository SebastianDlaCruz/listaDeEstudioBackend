import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import ItemsRouter from "./src/routers/items";
import ListaRouter from "./src/routers/lista";
import SubListaRouter from "./src/routers/subItems";

const app = express()
const port = process.env.PORT;


app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));

app.use("/items",ItemsRouter);
app.use("/sub-items",SubListaRouter);
app.use("/",ListaRouter);

app.listen(port, () => {
  console.log(`liver serve localhost:${port}`)
})