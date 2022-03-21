import express from "express";
import cors from "cors";
const morgan = require("morgan");
import Database from "./config/database.js";
// config dotenv file
require("dotenv").config();
//rest obj
const app = express();

// database
Database();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
//register
app.post("/register", (req, res) => {
  console.log("Register User Details", req.body);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Techinfoyt</h1>");
});

//listen to port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT} `);
});
