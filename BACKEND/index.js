import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './connection/databaseconnection.js';
// import router from './routes/routes.js';
import { userSignUp } from './controller/user-controller.js'


const app = express();
const PORT = 8000;


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/signup', userSignUp);

Connection()
app.listen(PORT, () => console.log("Server is running at port ", PORT))