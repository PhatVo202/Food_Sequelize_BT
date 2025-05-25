import express from "express";
import demoRouter from "./demo.router.js";
import { articleRouter } from "./article.router.js";
import restaurantRouter from "./restaurant.router.js";

const rootRouuter = express.Router();

rootRouuter.use("/demo", demoRouter);

rootRouuter.use("/article", articleRouter);

rootRouuter.use("/restaurant", restaurantRouter);

export default rootRouuter;
