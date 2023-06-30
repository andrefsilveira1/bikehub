import fp from "fastify-plugin";
import axios from "axios";

async function orionPlugin(fastify, _, done) {
  const instance = axios.create({ baseURL: process.env.ORION_URL });
  done();
}

export default fp(orionPlugin);
