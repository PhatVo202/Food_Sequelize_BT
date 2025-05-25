import express from "express";
import { articleController } from "../controllers/articel.controller";

export const articleRouter = express.Router();

articleRouter.get("/", articleController.findAll);
