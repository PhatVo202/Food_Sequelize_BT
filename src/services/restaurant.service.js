import { where } from "sequelize";
import { models } from "../common/sequelize/init.sequelize";
import prisma from "../prisma/init.prisma";

const restaurantService = {
  createLike: async (req, res, next) => {
    let { user_id, res_id } = req.body;
    user_id = +user_id;
    res_id = +res_id;
    const data = {
      user_id: user_id,
      res_id: res_id,
      date_like: new Date(),
    };
    const result = await models.like_res.create(data);
    return result;
  },
  unlike: async (req, res, next) => {
    let { user_id, res_id } = req.body;
    user_id = +user_id;
    res_id = +res_id;
    const data = await models.like_res.destroy({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });
    return data;
  },
  listLike: async (req, res, next) => {
    let { res_id } = req.params;
    res_id = +res_id;
    const result = await models.like_res.findAll({
      where: { res_id },
    });
    return result;
  },
  createReview: async (req, res, next) => {
    let { user_id, res_id, amount } = req.body;
    user_id = +user_id;
    res_id = +res_id;
    amount = +amount;
    const data = {
      user_id: user_id,
      res_id: res_id,
      amount: amount,
      date_rate: new Date(),
    };
    const result = await models.rate_res.create(data);
    return result;
  },
  listRate: async (req, res, next) => {
    let { res_id } = req.params;
    res_id = +res_id;
    const result = await models.rate_res.findAll({
      where: { res_id },
    });
    return result;
  },
  createOrder: async (req, res, next) => {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    user_id = +user_id;
    food_id = +food_id;
    amount = +amount;
    const data = {
      user_id: user_id,
      food_id: food_id,
      amount: amount,
      code: code,
      arr_sub_id: arr_sub_id,
    };
    const result = await models.order.create(data);
    return result;
  },
};

export default restaurantService;
