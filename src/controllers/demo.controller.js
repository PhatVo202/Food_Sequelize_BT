import { responseSuccess } from "../common/helpers/response.helper.js";
import demoService from "../services/demo.service.js";

const demoController = {
  helloWorld: (req, res, next) => {
    //gọi tới service
    const result = demoService.helloWorld();
    res.send(result);
  },
  mysql2: async (req, res, next) => {
    const result = await demoService.mysql2();
    const resData = responseSuccess(result, "Success data Mysql2 ", 200);
    res.status(resData.statusCode).json(resData);
  },
  sequelize: async (req, res, next) => {
    try {
      const result = await demoService.sequelize();
      const resData = responseSuccess(result, "Success data Sequelize ", 200);
      res.status(resData.statusCode).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default demoController;
