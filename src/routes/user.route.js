import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
import { createUserSchema } from "../validations/users.schema.validation.js";
import { validateRequest } from "../middlewares/validateRequest.middleware.js";

const UserRouter = () => {
  const router = Router();
  const userController = UserController();

  router.post(
    "/",
    validateRequest(createUserSchema),
    userController.createUser
  );

  return router;
};

export { UserRouter };
