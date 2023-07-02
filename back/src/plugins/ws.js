import { WebSocketServer } from "ws";
import fp from "fastify-plugin";
import validateAuthHeader from "../util/validateAuthHeader.js";

async function wsPlugin(fastify, _, done) {
  const ws = new WebSocketServer({ server: fastify.server, path: "/ws" });
  // This should be in a in-memory database or something.
  const sockets = {};
  ws.on("connection", (socket, request) => {
    try {
      // Apparently, it's not possible to send custom http headers via the WebSocket interface
      // in JavaScript. I did not know this.
      // So, I'm improvising here and sending the token as a query parameter. This NOT a good idea, but thein again
      // I'm desperate here.
      const [, authorizationHeader] = request.url.match(/\/ws\?token=(.*)/);
      const user = validateAuthHeader(decodeURI(authorizationHeader));
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
