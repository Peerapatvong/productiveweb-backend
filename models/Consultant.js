module.exports = (sequelize, DataTypes) => {
  const Consultant = sequelize.define(
    "Consultant",
    {
      ConsultantName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultantInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultantPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["AVALIABLE", "DELETED"],
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Consultant.associate = (models) => {
    Consultant.hasMany(models.InterestAdd, {
      foreignKey: {
        name: "consultantId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Consultant.hasMany(models.BookingItem, {
      foreignKey: {
        name: "consultantId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Consultant;
};
