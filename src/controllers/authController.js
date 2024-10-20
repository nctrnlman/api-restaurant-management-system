const authService = require("../services/authService");
const userService = require("../services/userService");

// Fungsi untuk mendaftar pengguna baru
const register = async (req, res) => {
  try {
    // Mengambil data dari request body
    const { name, email, password } = req.body;

    // Menggunakan userService untuk mendaftar pengguna baru
    const user = await userService.registerUser(name, email, password);
    res.sendResponse(
      "success",
      "User registered successfully",
      user,
      null,
      201
    );
  } catch (err) {
    res.sendResponse(
      "error",
      "Failed to register user",
      null,
      [err.message],
      500
    );
  }
};

// Fungsi untuk login pengguna
const login = async (req, res) => {
  try {
    // Mengambil email dan password dari request body
    const { email, password } = req.body;
    // Menggunakan authService untuk memverifikasi login
    const data = await authService.login(email, password);
    res.sendResponse("success", "Login successful", data, null, 200);
  } catch (err) {
    res.sendResponse("error", "Failed to log in", null, [err.message], 500);
  }
};

module.exports = {
  register,
  login,
};
