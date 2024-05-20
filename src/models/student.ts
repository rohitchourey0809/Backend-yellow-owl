// src/models/student.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  enrollmentNo: string;
  dateOfAdmission: Date;
}

const StudentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  enrollmentNo: { type: String, required: true },
  dateOfAdmission: { type: Date, default: Date.now },
});

export const StudentModel = mongoose.model<IStudent>("Student", StudentSchema);
