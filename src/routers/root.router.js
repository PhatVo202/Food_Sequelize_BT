import express from "express";
import demoRouter from "./demo.router.js";
import { articleRouter } from "./article.router.js";

const rootRouuter = express.Router();

rootRouuter.use("/demo", demoRouter);

rootRouuter.use("/article", articleRouter);

export default rootRouuter;
