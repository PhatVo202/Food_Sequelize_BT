import { models } from "../common/sequelize/init.sequelize";
import prisma from "../prisma/init.prisma";

const restaurantService = {
  createLike: async (req, res, next) => {
    const { user_id, res_id } = req.body;
    const data = {
      user_id: user_id,
      res_id: res_id,
      date_like: new Date(),
    };
    const result = await models.like_res.create(data);
    return result;
  },
};

export default restaurantService;
