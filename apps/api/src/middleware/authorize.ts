import { NextFunction, Request, Response } from "express"
import { AuthenticatedRequest } from "./authenticate.js"
import ApiResponse from "../util/response/ApiResponse.js"
import { ERROR_CODES, ERROR_MESSAGES } from "../constant/httpConstant.js"
type ReqUser = {
  id: number,
  userName: string,
  role: string
}
const authorizeRoles = (allowedRoles: string[]) => {
  return (req:AuthenticatedRequest,res:Response,next:NextFunction) => {
    const user = req.user as ReqUser
    const role = user.role

    if(!role && !allowedRoles.includes(role)){
      ApiResponse.error(res,ERROR_CODES.FORBIDDEN,ERROR_MESSAGES.UNAUTHORIZED_ACCESS)
    }
    next()
  }
}

export default authorizeRoles