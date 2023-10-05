import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// rest object
const app = express();

// config env
dotenv.config();

// connection to mongodb database
connectDb();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

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
