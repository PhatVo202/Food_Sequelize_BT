import express from "express";
import restaurantController from "../controllers/restaurant.controller";

const restaurantRouter = express.Router();

restaurantRouter.post("/like", restaurantController.createLike);

restaurantRouter.delete("/unlike", restaurantController.unlike);

restaurantRouter.get("/likelist/:res_id", restaurantController.listLike);

restaurantRouter.post("/rate", restaurantController.createReview);

restaurantRouter.get("/listrate/:res_id", restaurantController.listRate);

restaurantRouter.post("/order", restaurantController.createOrder);

export default restaurantRouter;
