import { StatusCodes } from "http-status-codes";

function validateRequest(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const validationError = new Error("Validation failed");
      validationError.statusCode = StatusCodes.BAD_REQUEST;
      validationError.details = error.details.map((d) => d.message);
      return next(validationError);
    }

    req.body = value;
    next(error);
  };
}

export { validateRequest };
