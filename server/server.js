import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//routes
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



// MiddleWare
app.use(express.json()); // Parse erquests with JSON paylods from req.body
app.use(cookieParser()); // Parse cookies from req.cookies


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)



app.get("/", (req, res) => {
  res.send("hello world");
})


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}.`)
})