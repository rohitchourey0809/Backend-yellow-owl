// src/index.ts
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);

app.use("/students", studentRoutes);

mongoose
  .connect(
    process.env.MONGO_URI ?? "mongodb://localhost:27017/student-management"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
