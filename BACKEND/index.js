import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import Connection from './connection/databaseconnection.js';
// import router from './routes/routes.js';
import { userSignUp } from './controller/user-controller.js'

dotenv.config({path:'./data.env'})
const DB_URL  = process.env.DB_URL
const PORT = process.env.PORT;

const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/signup', userSignUp);

Connection(DB_URL)
app.listen(PORT, () => console.log("Server is running at port", PORT))