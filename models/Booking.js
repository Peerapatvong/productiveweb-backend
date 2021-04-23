module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      paymentAmount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentBank: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM,
        values: ["PENDING", "REJECT", "FAIL", "SUCCESS"],
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Booking.associate = (models) => {
    Booking.hasMany(models.BookingItem, {
      foreignKey: {
        name: "bookingId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Booking.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Booking;
};
