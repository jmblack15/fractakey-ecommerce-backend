import BaseException from "./base.exception.js";
import { StatusCodes } from "http-status-codes";

export default class InternalServerException extends BaseException {
  constructor(message = "Internal server error", errorCode = "SERVER_ERROR") {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR, errorCode);
  }
}
