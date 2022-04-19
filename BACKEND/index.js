import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import Connection from './connection/databaseconnection.js';
import router from './routes/routes.js';
import path from 'path'

dotenv.config({ path: './config.env' })

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000;
const app = express();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);


if (process.env.NODE_ENV == "production") {
    app.use(express.static("FRONTEND/build"));
    app.get('/*', (req, res) => {
        let url =path.resolve(__dirname, '../FRONTEND/build',  'index.html')
        if (!url.startsWith('/app/')) // we're on local windows
          url = url.substring(1);
        res.sendFile(url);
      });
    // app.get("/*", (req, res) => {
    //     res.sendFile(path.resolve(__dirname, '../FRONTEND/build',  'index.html'));
    // })
}

Connection(DB_URL)

app.listen(PORT, () => console.log("Server is running at port", PORT))