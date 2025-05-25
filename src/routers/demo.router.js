import express from "express";
import demoController from "../controllers/demo.controller.js";

const demoRouter = express.Router();

demoRouter.get("/hello-world", demoController.helloWorld);

demoRouter.get("/mysql2", demoController.mysql2);

demoRouter.get(
  "/sequelize",
  (req, res, next) => {
    console.log("middleware 1");
    next();
  },
  (req, res, next) => {
    console.log("middleware 2");
    next();
  },
  (req, res, next) => {
    console.log("middleware 3");
    next();
  },
  demoController.sequelize
);

export default demoRouter;
