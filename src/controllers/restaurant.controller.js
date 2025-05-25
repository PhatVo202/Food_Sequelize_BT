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
};

export default restaurantController;
