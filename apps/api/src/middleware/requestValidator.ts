import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema, z } from "zod";

// Improved middleware typing for Zod validation
const requestValidator = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      
      schema.parse(req.body)
      next(); // Proceed to the next middleware
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation errors",
          errors: err.errors,
        });
        res.end()
      }else{
        next(err); // Pass other errors to error-handling middleware
      }
    }
  };
};

export default requestValidator;
