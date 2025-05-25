import mysql from "mysql2/promise";
import { DATABASE_URL } from "../constant/app.constant.js";
// MYSQL2
const pool = mysql.createPool({
  uri: DATABASE_URL,
});

export default pool;
