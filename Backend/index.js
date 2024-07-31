import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8005;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnection();
});
