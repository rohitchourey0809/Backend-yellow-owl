// src/routes/studentRoutes.ts
import express from "express";
import * as studentController from "../controllers/studentController";

const router = express.Router();

router.get("/", studentController.getAllStudents);
router.post("/", studentController.addStudent);
router.put("/:id", studentController.editStudent);
router.delete("/:id", studentController.deleteStudent);
// GET /students/search?name=John - Search students by name
router.get("/search", studentController.searchStudents);
router.get("/:id", studentController.getStudentById);

export default router;
