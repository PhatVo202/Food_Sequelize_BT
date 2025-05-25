import { BadrequestException } from "../common/helpers/exception.helper.js";
import pool from "../common/mysql2/init.mysql2.js";
import { models } from "../common/sequelize/init.sequelize.js";
import Roles from "../models/Roles-by-myselfs.js";

const demoService = {
  helloWorld: () => {
    return "Hello world";
  },
  mysql2: async () => {
    const [row, fields] = await pool.query("select * from Roles");
    return row;
  },
  sequelize: async (req, res, next) => {
    //Lỗi không kiểm soát được

    // console.log(abc);

    //Lỗi kiểm soát được
    // const passUser = "123";
    // const passDB = "1234";
    // if (passUser !== passDB) {
    //   new BadrequestException();
    //   throw new BadrequestException("Sai pass");
    // }
    const listRoles1 = await Roles.findAll();
    const listRoles2 = await models.Roles.findAll();
    const result = {
      "Model tự tạo": listRoles1,
      "Model do sequelize-auto tạo ra": listRoles2,
    };
    return result;
  },
};

export default demoService;
