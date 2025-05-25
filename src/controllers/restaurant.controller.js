import { responseSuccess } from "../common/helpers/response.helper";
import restaurantService from "../services/restaurant.service";

const restaurantController = {
  createLike: async (req, res, next) => {
    try {
      const result = await restaurantService.createLike(req);
      const resData = responseSuccess(result);
      console.log(resData);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
  unlike: async (req, res, next) => {
    try {
      const result = await restaurantService.unlike(req);
      const resData = responseSuccess(result);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
  listLike: async (req, res, next) => {
    try {
      const result = await restaurantService.listLike(req);
      const resData = responseSuccess(result);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
  createReview: async (req, res, next) => {
    try {
      const result = await restaurantService.createReview(req);
      const resData = responseSuccess(result);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
  listRate: async (req, res, next) => {
    try {
      const result = await restaurantService.listRate(req);
      const resData = responseSuccess(result);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
  createOrder: async (req, res, next) => {
    try {
      const result = await restaurantService.createOrder(req);
      const resData = responseSuccess(result);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default restaurantController;
