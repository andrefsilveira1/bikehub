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
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1 day" }
    );
    return { jwt: token };
  },
  validateJwt: (token) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      throw new APIError("Invalid token!", StatusCodes.UNAUTHORIZED);
    }
  },
  getBikesByUser: async (id) => {
    const bikes = await fastify.daos.user.findBikesByUser(id);
    if(!bikes) {
      throw new APIError("Invalid token!", StatusCodes.BAD_REQUEST);
    }
    return bikes;
  }
});

export default userService;
