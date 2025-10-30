import { createUserSchema } from "../validations/users.schema.validation.js";
import { UserServices } from "../services/user.services.js";
import { StatusCodes } from "http-status-codes";

const UserController = () => {
  const userServices = UserServices();

  const createUser = async (req, res) => {
    const { error, value } = createUserSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: error.details.map((detail) => detail.message),
      });
    }

    try {
      const createdUser = await userServices.createUser(value);
      return res.status(StatusCodes.CREATED).json(createdUser);
    } catch (error) {
      return res
        .status(error.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  };

  return {
    createUser,
  };
};

export { UserController };
