import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors"
import dbConnection from "./utils/db.js";

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 8005;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnection();
});
