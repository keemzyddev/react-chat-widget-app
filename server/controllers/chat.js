import { Server } from "socket.io";

export default (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User Connected", socket.id);

    socket.on("send-message", (message) => {
      socket.broadcast.emit("receive-message", message);
    });

    socket.on("disconnect", () => {
      console.log("A user has been disconnected");
    });
  });
};
