import { StatusCodes } from "http-status-codes";
import APIError from "../errors/APIError.js";

const rentalPointsService = (fastify) => ({
  get: async () => fastify.daos.rentalPoints.get(),
  subscribeToRentalPoint: async (id) => {
    const point = await fastify.daos.rentalPoints.findById(id);
    if (!point)
      throw new APIError("Rental point not found", StatusCodes.NOT_FOUND);
  },
  getRentalPointBikes: async (id) => {
    const point = await fastify.daos.rentalPoints.findById(id);
    if (!point)
      throw new APIError("Rental point not found!", StatusCodes.NOT_FOUND);
    return fastify.daos.bike.getBikesForRentalPoint(id);
  },
});

export default rentalPointsService;
