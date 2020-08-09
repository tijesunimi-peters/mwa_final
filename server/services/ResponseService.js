const createHttpError = require("http-errors");

class ResponseService {
  static success(req, res, next) {
    if (!req.success) return next();
    const data = req.success;
    const status = data.status || 200;
    res.status(status).json({
      status,
      data: data.data || {},
    });
  }

  static error(err, req, res, next) {
    const message = err.message;
    const showError = req.app.get("env") === "development";

    let serverError = createHttpError(err.status || 500);

    if (showError) {
      return res.status(serverError.statusCode).json({
        ...serverError,
        errors: [message],
      });
    } else {
      return res.status(serverError.statusCode).json({
        status: serverError.statusCode,
        errors: [message],
      });
    }
  }
}

module.exports = ResponseService;
