require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const tableRoutes = require("./src/routes/tableRoutes");
const reservationRoutes = require("./src/routes/reservationRoutes");
const db = require("./src/models");
const formatResponse = require("./src/utils/responseHandler");

const app = express();
app.use(cors());
app.use(express.json());
app.use(formatResponse);

// Public routes
app.use("/api/auth", authRoutes);

// Protected routes (requires authentication)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/reservations", reservationRoutes);

const PORT = process.env.PORT || 8000;

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
