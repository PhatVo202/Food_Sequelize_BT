import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../constant/app.constant";
import initModels from "../../models/init-models";

const sequelize = new Sequelize(DATABASE_URL);
export const models = initModels(sequelize);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;

//npx sequelize-auto -h localhost -d db_demo -u root -x 1234 -p 3307  --dialect mysql -o ./models -l esm -a ./addisional.json
