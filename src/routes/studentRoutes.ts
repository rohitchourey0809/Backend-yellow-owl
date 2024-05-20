// src/routes/studentRoutes.ts
import express from "express";
import * as studentController from "../controllers/studentController";

const router = express.Router();

router.get("/", studentController.getAllStudents);
router.post("/", studentController.addStudent);
router.put("/:id", studentController.editStudent);
router.delete("/:id", studentController.deleteStudent);

export default router;
