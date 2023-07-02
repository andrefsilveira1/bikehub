import { StatusCodes } from "http-status-codes";
import APIError from "../errors/APIError.js";

const rentalPointsService = (fastify) => ({
  get: async () => fastify.daos.rentalPoints.get(),
  subscribeToRentalPoint: async (id) => {
    const point = await fastify.daos.rentalPoints.findById(id);
    if (!point)
      throw new APIError("Rental point not found", StatusCodes.NOT_FOUND);
  },
  getBikeByRentId: async (id) => {
    const bikes = await fastify.daos.rentalPoints.findBikeByRentId(id);
    if(!bikes)
      throw new APIError("There is no bikes available", StatusCodes.NOT_FOUND);
    return bikes;
  }
});

export default rentalPointsService;
