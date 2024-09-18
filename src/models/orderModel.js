module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      table_id: {
        // Changed from reservation_id to table_id
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total_price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  Order.associate = function (models) {
    Order.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    Order.belongsTo(models.Table, {
      // Changed from Reservation to Table
      foreignKey: "table_id",
      as: "table",
    });
    Order.hasMany(models.OrderDetail, {
      foreignKey: "order_id",
      as: "orderDetails",
    });
  };

  return Order;
};
