import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

const UserRouter = () => {
  const router = Router();
  const userController = UserController();

  router.post("/", userController.createUser);

  return router;
};

export { UserRouter };
