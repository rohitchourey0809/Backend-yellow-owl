// src/controllers/studentController.ts
import { Request, Response } from "express";
import { StudentModel, IStudent } from "../models/student";

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentModel.find();
    res.json(students);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const addStudent = async (req: Request, res: Response) => {
  console.log("req.body", req.body);
  try {
    const student = new StudentModel(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).send(err);
  }
};

export const editStudent = async (req: Request, res: Response) => {
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
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await StudentModel.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await StudentModel.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.json(student);
  } catch (err) {
    res.status(500).send(err);
  }
};


export const searchStudents = async (req: Request, res: Response) => {
  const name = (req.query.name as string) || "";
  const sortField = (req.query.sortField as string) || "name";
  const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 10;

  try {
    const students = await StudentModel.find({
      name: { $regex: name, $options: "i" },
    })
      .sort({ [sortField]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalStudents = await StudentModel.countDocuments({
      name: { $regex: name, $options: "i" },
    });

    res.json({
      students,
      totalPages: Math.ceil(totalStudents / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};