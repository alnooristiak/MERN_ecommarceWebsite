import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import morgan from "morgan";

// rest object
const app = express();

// config env
dotenv.config();

// connection to mongodb database
connectDb();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommarce website",
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// listening server PORT
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`.bgMagenta.white);
});
