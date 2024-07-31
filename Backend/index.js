import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors"
import dbConnection from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const port = process.env.PORT || 8003;

const app = express();
app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    dbConnection();
});
