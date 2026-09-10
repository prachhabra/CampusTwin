const jwt = require("jsonwebtoken");
const Message = require("../models/Message");

// Tracks which userId is connected on which socket, for a simple
// online-status feature (Chapter 9).
const onlineUsers = new Map(); // userId -> socketId

function initSocket(io) {
  // Authenticate the socket connection using the same JWT as the REST API.
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error("No token provided"));
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.id;
      next();
    } catch (err) {
      next(new Error("Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    onlineUsers.set(socket.userId, socket.id);
    io.emit("presence:update", { userId: socket.userId, online: true });

    // Join a chat room (e.g. a club id, event id, or a DM room key)
    socket.on("room:join", (roomId) => {
      socket.join(roomId);
    });

    socket.on("room:leave", (roomId) => {
      socket.leave(roomId);
    });

    // Send + persist a message
    socket.on("message:send", async ({ room, text }) => {
      if (!room || !text) return;
      try {
        const message = await Message.create({ room, sender: socket.userId, text });
        io.to(room).emit("message:new", {
          _id: message._id,
          room,
          sender: socket.userId,
          text,
          createdAt: message.createdAt,
        });
      } catch (err) {
        socket.emit("message:error", { message: "Could not send message" });
      }
    });

    socket.on("disconnect", () => {
      onlineUsers.delete(socket.userId);
      io.emit("presence:update", { userId: socket.userId, online: false });
    });
  });
}

module.exports = { initSocket, onlineUsers };
