import { Schema, Types, model } from "mongoose";
import { IStudent } from "../repository/IStudent";

const studentSchema = new Schema<IStudent>({
    _id: Types.ObjectId,
    name: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    SID: Number,
    created_at: Date,
    updated_at: Date,
    class: [{ type: Types.ObjectId, ref: 'Class', index: true }]
});

const studentModel = model<IStudent>('Student', studentSchema);

export default studentModel;