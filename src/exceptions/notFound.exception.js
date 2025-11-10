import BaseException from "./base.exception.js";
import { StatusCodes } from "http-status-codes";

export default class NotFoundException extends BaseException {
  constructor(message = "Resource not found", errorCode = "NOT_FOUND") {
    super(message, StatusCodes.NOT_FOUND, errorCode);
  }
}
