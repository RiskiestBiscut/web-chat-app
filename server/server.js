import express from "express";
import dotenv from "dotenv";

//routes
import authRoutes from "./routes/authRoutes.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("hello world");
})

app.use("/api/auth", authRoutes)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`))