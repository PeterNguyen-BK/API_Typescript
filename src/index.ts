import express, { Application, Request, Response } from 'express';
import studentRouter  from './routes/student.route';
import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
const app: Application = express();

app.use('/students', studentRouter);

app.listen("5000", (): void => {
    console.log("Server is running...");
});