import { DataTypes } from "sequelize";
import sequelize from "../common/sequelize/init.sequelize";

//model
const Roles = sequelize.define(
  "Roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
    createdAt: {
      type: "TIMESTAMP",
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: "TIMESTAMP",
      allowNull: false,
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    },
  },
  {
    tableName: "Roles",
    timestamps: false,
  }
);

// CODE FIRST: tạo db bằng code
// đồng bộ table vào bên trong database
Roles.sync();

// DATABASE FIRST: có database lôi ra thành code
// npx sequelize-auto -h localhost -d db_cyber_community -u root -x 1234 -p 3307  --dialect mysql -o ./models -l esm -a ./addisional.json

export default Roles;
