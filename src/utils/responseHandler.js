function formatResponse(req, res, next) {
  res.sendResponse = (
    status,
    message,
    data = null,
    errors = null,
    httpStatusCode = 200
  ) => {
    res.status(httpStatusCode).json({
      status,
      message,
      data,
      errors,
    });
  };
  next();
}

module.exports = formatResponse;
