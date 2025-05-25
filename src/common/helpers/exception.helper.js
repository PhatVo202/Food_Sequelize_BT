import { statusCodes } from "./statu-code.helper";

export class BadrequestException extends Error {
  constructor(message) {
    super((message = "BadrequestException"));
    this.code = statusCodes.BAD_REQUEST;
  }
}
