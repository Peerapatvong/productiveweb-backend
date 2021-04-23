module.exports = (sequelize, DataTypes) => {
  const BookingItem = sequelize.define(
    "BookingItem",
    {
      timeBooking: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DateBooking: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      amountHour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["SELECTED", "DELETED"],
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  BookingItem.associate = (models) => {
    BookingItem.belongsTo(models.Consultant, {
      foreignKey: {
        name: "consultantId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    BookingItem.belongsTo(models.Booking, {
      foreignKey: {
        name: "bookingId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return BookingItem;
};
