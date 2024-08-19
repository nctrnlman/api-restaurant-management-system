module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    "Reservation",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      table_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pax: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Reservation.associate = function (models) {
    Reservation.belongsTo(models.Table, {
      foreignKey: "table_id",
      as: "table",
    });
  };

  return Reservation;
};
