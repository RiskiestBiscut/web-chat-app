import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//routes
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from './socket/socket.js';

dotenv.config();


const PORT = process.env.PORT || 3000;



// MiddleWare
app.use(express.json()); // Parse erquests with JSON paylods from req.body
app.use(cookieParser()); // Parse cookies from req.cookies


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}.`)
})