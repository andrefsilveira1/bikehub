import { WebSocketServer } from "ws";
import fp from "fastify-plugin";
import validateAuthHeader from "../util/validateAuthHeader.js";

async function wsPlugin(fastify, _, done) {
  const ws = new WebSocketServer({ server: fastify.server, path: "/ws" });

  ws.on("connection", (socket, request) => {
    try {
      const user = validateAuthHeader(request.headers.authorization);
      console.log(user);
    } catch {
      socket.close();
    }
  });
  done();
}

export default fp(wsPlugin);
