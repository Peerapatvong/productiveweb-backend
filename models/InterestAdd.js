module.exports = (sequelize, DataTypes) => {
  const InterestAdd = sequelize.define(
    "InterestAdd",
    {},
    {
      underscored: true,
    }
  );

  InterestAdd.associate = (models) => {
    InterestAdd.belongsTo(models.Interest, {
      foreignKey: {
        name: "interestId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    InterestAdd.belongsTo(models.Consultant, {
      foreignKey: {
        name: "consultantId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return InterestAdd;
};
