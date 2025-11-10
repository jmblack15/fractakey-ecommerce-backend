import { UserServices } from "../services/user.services.js";
import { StatusCodes } from "http-status-codes";
import { MESSAGES } from "../utils/messages.js";
import { successResponse } from "../utils/responseHandler.js";

const UserController = () => {
  const userServices = UserServices();

  const createUser = async (req, res, next) => {
    try {
      const createdUser = await userServices.createUser(req.body);
      return successResponse(
        res,
        MESSAGES.USER.CREATED,
        createdUser,
        StatusCodes.CREATED
      );
    } catch (error) {
      next(error);
    }
  };

  return {
    createUser,
  };
};

export { UserController };
