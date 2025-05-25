import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Articles from "./Articles.js";
import _Chats from "./Chats.js";
import _Permissions from "./Permissions.js";
import _RolePermission from "./RolePermission.js";
import _Roles from "./Roles.js";
import _TABLE_TEMPLATE from "./TABLE_TEMPLATE.js";
import _Users from "./Users.js";

import _food from "./food.js";
import _food_type from "./food_type.js";
import _like_res from "./like_res.js";
import _order from "./order.js";
import _rate_res from "./rate_res.js";
import _restaurant from "./restaurant.js";
import _sub_food from "./sub_food.js";
import _user from "./user.js";

export default function initModels(sequelize) {
  const Articles = _Articles.init(sequelize, DataTypes);
  const Chats = _Chats.init(sequelize, DataTypes);
  const Permissions = _Permissions.init(sequelize, DataTypes);
  const RolePermission = _RolePermission.init(sequelize, DataTypes);
  const Roles = _Roles.init(sequelize, DataTypes);
  const TABLE_TEMPLATE = _TABLE_TEMPLATE.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);

  const food = _food.init(sequelize, DataTypes);
  const food_type = _food_type.init(sequelize, DataTypes);
  const like_res = _like_res.init(sequelize, DataTypes);
  const order = _order.init(sequelize, DataTypes);
  const rate_res = _rate_res.init(sequelize, DataTypes);
  const restaurant = _restaurant.init(sequelize, DataTypes);
  const sub_food = _sub_food.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  order.belongsTo(food, { as: "food", foreignKey: "food_id" });
  food.hasMany(order, { as: "orders", foreignKey: "food_id" });
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id" });
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id" });
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id" });
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id" });
  like_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id" });
  restaurant.hasMany(like_res, { as: "like_res", foreignKey: "res_id" });
  rate_res.belongsTo(restaurant, { as: "re", foreignKey: "res_id" });
  restaurant.hasMany(rate_res, { as: "rate_res", foreignKey: "res_id" });
  like_res.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(like_res, { as: "like_res", foreignKey: "user_id" });
  order.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(order, { as: "orders", foreignKey: "user_id" });
  rate_res.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id" });

  RolePermission.belongsTo(Permissions, {
    as: "permission",
    foreignKey: "permissionId",
  });
  Permissions.hasMany(RolePermission, {
    as: "RolePermissions",
    foreignKey: "permissionId",
  });
  RolePermission.belongsTo(Roles, { as: "role", foreignKey: "roleId" });
  Roles.hasMany(RolePermission, {
    as: "RolePermissions",
    foreignKey: "roleId",
  });
  Users.belongsTo(Roles, { as: "role", foreignKey: "roleId" });
  Roles.hasMany(Users, { as: "Users", foreignKey: "roleId" });
  Chats.belongsTo(Users, { as: "user", foreignKey: "userId" });
  Users.hasMany(Chats, { as: "Chats", foreignKey: "userId" });

  return {
    Articles,
    Chats,
    Permissions,
    RolePermission,
    Roles,
    TABLE_TEMPLATE,
    Users,
    food,
    food_type,
    like_res,
    order,
    rate_res,
    restaurant,
    sub_food,
    user,
  };
}
