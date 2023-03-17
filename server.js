import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import connectDb from "./config/connectDb.js";
import userRoute from "./routes/userRoute.js";
import transactionRoute from "./routes/transactionRoute.js";

// config .env file
dotenv.config();

// database
connectDb();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
// user routes
app.use("/api/v1/users", userRoute);

// transaction routes
app.use("/api/v1/transactions", transactionRoute);

// port
const port = process.env.PORT || 8000;

// listening server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
