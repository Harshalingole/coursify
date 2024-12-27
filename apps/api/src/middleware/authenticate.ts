import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import ApiResponse from "../util/response/ApiResponse.js";
import { ERROR_CODES, ERROR_MESSAGES } from "../constant/httpConstant.js";
export interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

const authenticate = (req:AuthenticatedRequest, res:Response, next:NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]
  
  

  try {
    if(!token){
      ApiResponse.error(res,ERROR_CODES.UNAUTHORIZED,ERROR_MESSAGES.TOKEN_INVALID)
    }
    
    const secret = process.env.JWT_SECRET!
    req.user = token && jwt.verify(token,secret)
    next()
  } catch (error) {
    ApiResponse.error(res,403,"Invalid or expired tokedn")
  }
}

export default authenticate