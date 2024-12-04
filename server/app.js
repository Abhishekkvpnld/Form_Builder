import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dbConnection from "./config/dbConnection.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173/"],
    credentials: true,
  })
);

app.use("/api/v1/user", userRoute);

app.use("/", (req, res) => {
  res.send("Server running...");
});

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
