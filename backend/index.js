import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import Connection from './connection/databaseconnection.js';
import router from './routes/routes.js';
import path from 'path'
import {fileURLToPath} from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: './config.env' })

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'FRONTEND','build')));
app.use(cors());
app.use('/', router);
app.use(express.json())

// if (process.env.NODE_ENV == "production") {
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname,'FRONTEND','build','index.html'));
})
// }

Connection(DB_URL)

app.listen(PORT, () => console.log("Server is running at port", PORT))