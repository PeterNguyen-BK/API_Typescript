import { Document, Types } from "mongoose";
export interface IStudent extends Document {
    _id: Types.ObjectId,
    name: String,
    dateOfBirth: String,
    gender: String,
    SID: Number,
    created_at: Date,
    updated_at: Date,
    class: [Types.ObjectId]
}