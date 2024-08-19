module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define(
    "Table",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      table_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Table.associate = function (models) {
    Table.hasMany(models.Reservation, {
      foreignKey: "table_id",
      as: "reservations",
    });
  };

  return Table;
};
