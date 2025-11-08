import ConflictException from "../exceptions/conflict.exception.js";
import { prisma } from "../models/prismaClient.js";
import bcrypt from "bcrypt";

const UserServices = () => {
  const createUser = async (userData) => {
    const { email } = userData;
    const userExists = await findUserByEmail(email);
    if (userExists) {
      throw new ConflictException("User with this email already exists");
    }

    const { password, ...rest } = userData;
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
