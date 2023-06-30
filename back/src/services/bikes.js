import { StatusCodes } from "http-status-codes";
import APIError from "../errors/APIError.js";

const bikesService = (fastify) => ({
  rentBike: async (bikeId, userId) => {
    const bike = await fastify.daos.bike.findById(bikeId);
    if (!bike) throw new APIError("Bike doesn't exist", StatusCodes.NOT_FOUND);
    if (!bike.available)
      throw new APIError("Bike isn't available", StatusCodes.BAD_REQUEST);
    await fastify.daos.bike.createRental(bikeId, userId);
    return bike;
  },
});

export default bikesService;
