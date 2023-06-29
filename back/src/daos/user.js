export default (fastify) => ({
  hello: () => console.log(fastify.knex),
});
