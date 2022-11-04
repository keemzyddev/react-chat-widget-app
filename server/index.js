import express from "express";
import http from "http";
import chat from "./controllers/chat.js";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));

chat(server);
