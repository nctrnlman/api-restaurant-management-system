require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const tableRoutes = require("./src/routes/tableRoutes");
const reservationRoutes = require("./src/routes/reservationRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const db = require("./src/models");
const formatResponse = require("./src/utils/responseHandler");

// Membuat instance aplikasi Express
const app = express();
// Menggunakan middleware
app.use(cors()); // Mengizinkan permintaan dari sumber lain
app.use(express.json()); // Memungkinkan aplikasi untuk mem-parsing JSON dalam permintaan
app.use(formatResponse); // Memformat respons agar konsisten

// Public routes
app.use("/api/auth", authRoutes);

// Protected routes (requires authentication)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/orders", orderRoutes);

// Menentukan port untuk server
const PORT = process.env.PORT || 8001;

// Fungsi untuk memulai server
const startServer = async () => {
  try {
    await db.sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

startServer();
