export default (fastify) => ({
  findByEmail: async (email) =>
    (await fastify.knex("users").where({ email }))[0],
});
