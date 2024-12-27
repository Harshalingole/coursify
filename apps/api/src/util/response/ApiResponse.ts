import { Response } from "express";

class ApiResponse {
  static success(res: Response,statusCode: number,message:string,data: any[]){
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      errors: null
    })
  }

  static error(res:Response,statusCode: number,message:string,errors: any[] = []){
    return res.status(statusCode).json({
      sucess: false,
      message,
      data: null,
      errors
    })
  }
}

export default ApiResponse