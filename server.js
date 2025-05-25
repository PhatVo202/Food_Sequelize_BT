import express from "express";

import rootRouuter from "./src/routers/root.router.js";
import { handleError } from "./src/common/helpers/handle-err.helper.js";
import morgan from "morgan";
import chalk from "chalk";
import cors from "cors";

const app = express();
const port = 3069;

app.use(cors({ origin: ["http://localhost:3000"] }));

//middleware
app.use(express.json());
app.use(
  morgan(function (tokens, req, res) {
    chalk.bgBlue;
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
    ].join(" ");
  })
);

//gắn rootRouter vào app
app.use(rootRouuter);
app.use(handleError);

app.listen(3069, () => {
  console.log("Server is running on port 3069");
});

/**
 * QUAN TRỌNG
 * express version thấp hơn 5 thì cần bọc try/catch để xử lý lỗi
 * express version từ 5 trở lên thì không cần nữa
 */

// Express: Lỗi để xây dựng BE =>API
// nodemon: reload lại server khi code thay đổi
// mysql2: để tương tác với database bằng câu lệnh SQL
// sequelize: ORM giúp tương tác với DB bằng function
// sequelize-auto:  Giúp kéo table vào bên trong code tự tạo ra DB
//extensionless: giúp import file mà không cần phải thêm đuôi js
// morgan: Giúp show log ra terminal khi có 1 api gọi tới
// chalk: tô màu cho terminal đẹp đẹp
