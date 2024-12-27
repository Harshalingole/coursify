class ApiError extends Error {
  // properties
  public readonly statusCode: number; 
  public readonly isOperational: boolean;
  public readonly errors: any[]
  
  constructor(
    message: string,
    statusCode: number = 500,
    errors: any[] = [],
    isOperational:boolean = true
  ) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errors = errors

    if (process.env.NODE_ENV == "development") {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}


export default ApiError