import express from "express"
import dbConnection from "./utils/db.js"
import cron from "node-cron"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = process.env.PORT;

//Schedule Task
const run = () => {
    cron.schedule('* * * * * *', () => {
        console.log('running a task every minute');
    });
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnection();
});


