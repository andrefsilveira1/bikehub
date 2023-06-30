import { WebSocketServer } from "ws";
import fp from "fastify-plugin";
import validateAuthHeader from "../util/validateAuthHeader.js";

async function wsPlugin(fastify, _, done) {
  const ws = new WebSocketServer({ server: fastify.server, path: "/ws" });
  // This should be in a in-memory database or something.
  const sockets = {};
  ws.on("connection", (socket, request) => {
    try {
      const user = validateAuthHeader(request.headers.authorization);
      sockets[user.id] = socket;
    } catch {
      socket.close();
    }
  });
  fastify.decorate("ws", {
    notify: (userId, data) => {
      const socket = sockets[userId];
      if (socket) socket.send(JSON.stringify(data));
      else console.log("Did not send notification");
    },
  });
  done();
}

export default fp(wsPlugin);
