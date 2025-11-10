import { StatusCodes } from "http-status-codes";

function errorHandler(err, req, res, next) {
  const status = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const isServerError = status >= 500;

  if (isServerError) {
    console.error("💥 Server error:", err);
  }

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
    errorCode:
      err.errorCode ||
      (status === StatusCodes.BAD_REQUEST
        ? "VALIDATION_ERROR"
        : status >= 500
        ? "SERVER_ERROR"
        : "ERROR"),
    details: err.details || undefined,
  });
}

export { errorHandler };
