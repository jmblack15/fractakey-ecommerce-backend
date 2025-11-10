import ConflictException from "../exceptions/conflict.exception.js";
import { prisma } from "../models/prismaClient.js";
import bcrypt from "bcrypt";
import { MESSAGES } from "../utils/messages.js";

const UserServices = () => {
  const createUser = async (userData) => {
    const { email } = userData;
    const userExists = await findUserByEmail(email);

    if (userExists) {
      throw new ConflictException(
        MESSAGES.USER.ALREADY_EXISTS,
        "USER_ALREADY_EXISTS"
      );
    }

    const { password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
    return newUser;
  };

  const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
      where: { email },
    });
  };

  return {
    createUser,
  };
};

export { UserServices };
