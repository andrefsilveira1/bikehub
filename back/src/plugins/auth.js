import jwt from "jsonwebtoken";
import APIError from "../errors/APIError.js";
import { StatusCodes } from "http-status-codes";

export default async function auth(fastify, _, done) {
  fastify.addHook("preHandler", async (req, res) => {
    if (!req.headers.authorization)
      throw new APIError("Authentication required", StatusCodes.BAD_REQUEST);
    const [, token] = req.headers.authorization?.split(" ");
    if (!token)
      throw new APIError("Authentication required", StatusCodes.BAD_REQUEST);
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      throw new APIError("Authentication failed", StatusCodes.UNAUTHORIZED);
    }
  });
}
