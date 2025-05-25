import express from "express";
import restaurantController from "../controllers/restaurant.controller";

const restaurantRouter = express.Router();

restaurantRouter.post("/like", restaurantController.createLike);

export default restaurantRouter;
