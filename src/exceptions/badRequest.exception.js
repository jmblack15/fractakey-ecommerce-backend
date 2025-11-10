import BaseException from "./base.exception.js";
import { StatusCodes } from "http-status-codes";

export default class BadRequestException extends BaseException {
  constructor(message = "Bad request", errorCode = "BAD_REQUEST") {
    super(message, StatusCodes.BAD_REQUEST, errorCode);
  }
}
