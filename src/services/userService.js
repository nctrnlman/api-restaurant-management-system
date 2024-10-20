const bcrypt = require("bcrypt");
const userRepository = require("../repositories/userRepository");
const saltRounds = 10;

// Fungsi untuk mendaftar pengguna baru
const registerUser = async (name, email, password) => {
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return await userRepository.createUser({
    name,
    email,
    password: hashedPassword,
  });
};

// Fungsi untuk mengambil pengguna berdasarkan ID
const getUserById = async (id) => {
  return await userRepository.findUserById(id);
};

// Fungsi untuk mengambil semua pengguna
const getAllUsers = async () => {
  return await userRepository.findAllUsers();
};

// Fungsi untuk memperbarui informasi pengguna
const updateUser = async (id, name, email, password) => {
  const userData = { name, email };
  if (password) {
    userData.password = await bcrypt.hash(password, saltRounds);
  }
  return await userRepository.updateUser(id, userData);
};

// Fungsi untuk menghapus pengguna berdasarkan ID
const deleteUser = async (id) => {
  return await userRepository.deleteUser(id);
};

module.exports = {
  registerUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
