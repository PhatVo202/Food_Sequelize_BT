import { responseSuccess } from "../common/helpers/response.helper";
import { articleService } from "../services/article.service";

export const articleController = {
  findAll: async (req, res, next) => {
    try {
      const result = await articleService.findAll(req);
      const resData = responseSuccess(result);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
};
