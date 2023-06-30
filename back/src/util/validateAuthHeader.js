import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import APIError from "../errors/APIError.js";

export default function validateAuthHeader(authHeader) {
  if (!authHeader)
    throw new APIError("Authentication required", StatusCodes.BAD_REQUEST);
  const [, token] = authHeader.split(" ");
  if (!token)
    throw new APIError("Authentication required", StatusCodes.BAD_REQUEST);
  try {
    const { user } = jwt.verify(token, process.env.JWT_SECRET);
    return user;
  } catch {
    throw new APIError("Authentication failed", StatusCodes.UNAUTHORIZED);
  }
}
