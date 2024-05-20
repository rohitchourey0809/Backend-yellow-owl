import cors from "cors";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { StudentModel } from "./models/student";
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
  })
);

// Connect to MongoDB

let Mongodburi =
  process.env.MONGO_URI ?? "mongodb://localhost:27017/student-management";
mongoose
  .connect(Mongodburi)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// View all students
app.get("/students", async (req: Request, res: Response) => {
  try {
    const students = await StudentModel.find();
    res.json(students);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a new student
app.post("/students", async (req: Request, res: Response) => {
  try {
    const student = new StudentModel(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit student details
app.put("/students/:id", async (req: Request, res: Response) => {
  try {
    const student = await StudentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.json(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a student
app.delete("/students/:id", async (req: Request, res: Response) => {
  try {
    const student = await StudentModel.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
