module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reservation_id: {
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
    Order.belongsTo(models.Reservation, {
      foreignKey: "reservation_id",
      as: "reservation",
    });
    Order.hasMany(models.OrderDetail, {
      foreignKey: "order_id",
      as: "orderDetails",
    });
  };

  return Order;
};
