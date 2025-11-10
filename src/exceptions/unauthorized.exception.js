import BaseException from "./base.exception.js";
import { StatusCodes } from "http-status-codes";

export default class UnauthorizedException extends BaseException {
  constructor(message = "Unauthorized", errorCode = "UNAUTHORIZED") {
    super(message, StatusCodes.UNAUTHORIZED, errorCode);
  }
}
