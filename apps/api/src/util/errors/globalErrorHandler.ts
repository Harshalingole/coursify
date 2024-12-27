import { NextFunction, Request, Response } from "express";
import ApiError from "./ApiError.js";
import ApiResponse from "../response/ApiResponse.js";

const globalErrorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === "development") {
    console.log("Error:", err);
  } else {
    if (!err.isOperational) {
      console.error("Critical Error:", err);
    }
  }

  if (err.isOperational) {
    return ApiResponse.error(res, err.statusCode || 500, err.message, err.errors || []);
  }

  return ApiResponse.error(res, 500, "An unexpected error occurred");
};

export default globalErrorHandler;
