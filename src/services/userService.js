const bcrypt = require("bcrypt");
const userRepository = require("../repositories/userRepository");
const saltRounds = 10;

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

const getUserById = async (id) => {
  return await userRepository.findUserById(id);
};

const getAllUsers = async () => {
  return await userRepository.findAllUsers();
};

const updateUser = async (id, name, email, password) => {
  const userData = { name, email };
  if (password) {
    userData.password = await bcrypt.hash(password, saltRounds);
  }
  return await userRepository.updateUser(id, userData);
};

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
