import express, { Router } from "express";
import { Student } from "../controllers/student.controller";
const router: Router = express.Router();


const student = new Student();
router.route('/')
    .get(student.getStudents);

export default router;