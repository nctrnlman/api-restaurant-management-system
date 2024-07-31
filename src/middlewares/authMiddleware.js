const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.sendResponse("error", "No token provided", null, null, 403);
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.sendResponse(
        "error",
        "Failed to authenticate token",
        null,
        [err.message],
        401
      );
    }

    req.userId = decoded.id;
    req.userEmail = decoded.email;

    next();
  });
};

module.exports = authMiddleware;
