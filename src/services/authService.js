const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");
const secretKey = process.env.JWT_SECRET || "your_jwt_secret";

const login = async (email, password) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user) {
    throw new Error("Email not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Incorrect password");
  }
  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });
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
