import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import authRoutes from "./routers/authRoutes.js";
import postRoutes from "./routers/postRoutes.js";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;
const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is runnig on port ${process.env.PORT}`);
    });
    console.log("the database is connected");
  })
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
