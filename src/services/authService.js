const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

// Fungsi login
const login = async (email, password) => {
  // Mencari pengguna berdasarkan email
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new Error("Email not found");
  }
  // Memeriksa apakah password yang dimasukkan cocok dengan password yang terhash
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }
  // Membuat token JWT dengan informasi pengguna
  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });
  // Mempersiapkan data pengguna untuk dikembalikan
  const userData = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  return { token, user: userData };
};

module.exports = {
  login,
};
