const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

// Middleware fungsi untuk otentikasi
const authMiddleware = (req, res, next) => {
  // Mengambil token dari header Authorization
  const token = req.headers["authorization"]?.split(" ")[1];

  // Jika tidak ada token yang diberikan, kembalikan respons 403 Forbidden
  if (!token) {
    return res.sendResponse("error", "No token provided", null, null, 403);
  }

  // Memverifikasi token menggunakan kunci rahasia
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

    // Jika verifikasi berhasil, ambil info pengguna dari token yang terdecode
    req.userId = decoded.id;
    req.userEmail = decoded.email;

    // Panggil middleware atau handler rute berikutnya
    next();
  });
};

module.exports = authMiddleware;
