import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./util/errors/globalErrorHandler.js";
import ApiError from "./util/errors/ApiError.js";

dotenv.config();
const app: Application = express();

// Express Configuration
app.set("port", process.env.PORT);

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.get("/", (req, res) => {
  res.send("Coursify Home Server.ts");
});

app.use("/api/user", userRoutes);

// Global Error Handler
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  globalErrorHandler(err, req, res, next);
});

export default app;
