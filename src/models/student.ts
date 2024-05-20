import { Schema, model, Document } from "mongoose";

interface Student extends Document {
  name: string;
  email: string;
  phoneNo: string;
  enrollmentNo: string;
  dateOfAdmission: Date;
}

const studentSchema = new Schema<Student>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  enrollmentNo: { type: String, required: true },
  dateOfAdmission: { type: Date, required: true },
});

const StudentModel = model<Student>("Student", studentSchema);

export { Student, StudentModel };
