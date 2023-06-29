import APIError from "../errors/APIError.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";

const userService = (fastify) => ({
  login: async (email, password) => {
    const user = await fastify.daos.user.findByEmail(email);
    if (!user)
      throw new APIError("Invalid credentials!", StatusCodes.BAD_REQUEST);
    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword)
      throw new APIError("Invalid credentials!", StatusCodes.BAD_REQUEST);
    const token = jwt.sign(
      {
        user: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1 day" }
    );
    return { jwt: token };
  },
});

export default userService;
