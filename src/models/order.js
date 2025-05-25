import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        order_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user",
            key: "user_id",
          },
        },
        food_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "food",
            key: "food_id",
          },
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        code: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        arr_sub_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "order",
        timestamps: false,
        indexes: [
          {
            name: "user_id",
            using: "BTREE",
            fields: [{ name: "user_id" }],
          },
          {
            name: "food_id",
            using: "BTREE",
            fields: [{ name: "food_id" }],
          },
        ],
      }
    );
  }
}
