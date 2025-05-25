import { responseError } from "./response.helper";

export const handleError = (err, req, res, next) => {
  console.log("MiddleWare Error đặc biệt", err);
  const resData = responseError(err?.message, err?.code, err?.stack);
  res.status(resData.statusCode).json(resData);
};
