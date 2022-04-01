require("dotenv").config();
import express from "express";
import cors from "cors";
import Database from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoute";

const morgan = require("morgan");

// config dotenv file

// database
Database();

//middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
//register
app.use("/api", authRoutes);
app.use("/api", postRoutes);

//listen to port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT} `);
});
