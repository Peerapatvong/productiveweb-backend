module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
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

  Order.associate = (models) => {
    Order.belongsTo(models.Course, {
      foreignKey: {
        name: "courseId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Order.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Order;
};
