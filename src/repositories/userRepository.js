const db = require("../models");
const User = db.User;

// Fungsi untuk membuat pengguna baru
const createUser = async (userData) => {
  return await User.create(userData);
};

// Fungsi untuk menemukan pengguna berdasarkan email
const findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

// Fungsi untuk menemukan pengguna berdasarkan ID
const findUserById = async (id) => {
  return await User.findByPk(id);
};

// Fungsi untuk mengambil semua pengguna
const findAllUsers = async () => {
  return await User.findAll({
    order: [["name", "ASC"]],
  });
};

// Fungsi untuk memperbarui pengguna berdasarkan ID
const updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (user) {
    return await user.update(userData);
  }
  return null;
};

// Fungsi untuk menghapus pengguna berdasarkan ID
const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  findAllUsers,
  updateUser,
  deleteUser,
};
