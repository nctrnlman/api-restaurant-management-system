const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.sendResponse(
      "error",
      "No token provided",
      null,
      null,
      403 // Status code 403: Forbidden
    );
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.sendResponse(
        "error",
        "Failed to authenticate token",
        null,
        [err.message],
        500 // Status code 500: Internal Server Error
      );
    }

    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  });
};

module.exports = {
  authMiddleware,
};
