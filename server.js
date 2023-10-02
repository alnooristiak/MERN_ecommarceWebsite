import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// config env
dotenv.config();

// rest object
const app = express();

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
