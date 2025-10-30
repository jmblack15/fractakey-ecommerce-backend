import ConflictException from "../exceptions/conflict.exception.js";
import { prisma } from "../models/prismaClient.js";

const UserServices = () => {
  const createUser = async (userData) => {
    const { email } = userData;
    const userExists = await findUserByEmail(email);
    if (userExists) {
      throw new ConflictException("User with this email already exists");
    }

    const newUser = await prisma.user.create({
      data: {
        ...userData,
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
