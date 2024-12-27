export const ERROR_CODES = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  TOO_MANY_REQUEST: 429,

  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
}

export const ERROR_MESSAGES = {
  VALIDATION_FAILED: "Validation failed",
  UNAUTHORIZED_ACCESS: "Your not authorized to perform this action",
  RESOURCE_NOT_FOUND: "The requested Resource was not found",
  METHOD_NOT_ALLOWED: "The Http method used is not allowed for this endpoint",
  TOO_MANY_REQUEST: "Too many request. Please try again later",

  // Authentication & Authorization
  INVALID_CREDENTIAL: "Invalid credentials provided",
  TOKEN_EXPIRED: "Authentication token has expired",
  TOKEN_INVALID: "Authentication token is invalid",
  PERMISSION_DENIED: "You dont have permission to perform this action",
  SESSION_EXPIRED: "Your session has expired, please log in again",

  // Server Error
  INTERNAL_SERVER_ERROR: "An internal server error occured. Please try again later",
  SERVICE_UNAVAILABLE: "This service is temporarily unavailable. Please try again later",
  DATABASE_ERROR: "An error occured while interacting with the database",
  
}

export const SUCCESS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204
}

export const SUCCESS_MESSAGES = {
  // General
  OPERATION_SUCCESS: "Operation completed successfully",
  RESOURCE_CREATED: "Resource created successfully",
  RESOURCE_UPDATED: "Resource updated successfully",
  RESOURCE_DELETED: "Resource deleted successfully",
  REQUEST_ACCEPTED: "Your request has been accepted for processing",

  // Authentication & Authorization
  LOGIN_SUCCESS: "Logged in successfully",
  LOGOUT_SUCCESS: "Logged out successfully",
  PASSWORD_CHANGED: "Password changed successfully",
  REGISTRATION_SUCCESS: "Registration completed successfully",

  // Data Handling
  DATA_FETCHED: "Data fetched successfully",
  DATA_SAVED: "Data saved successfully",
  DATA_UPDATED: "Data updated successfully",
  DATA_DELETED: "Data deleted successfully",
};
