const loginService = (fastify) => ({
  authenticate: async (token) => {
    try {
        const decodedToken = await fastify.jwt.verify(token);
        return { decodedToken };
      } catch (err) {
        return false;
      }
  },
});

export default loginService;
