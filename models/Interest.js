module.exports = (sequelize, DataTypes) => {
  const Interest = sequelize.define(
    "Interest",
    {
      interestType: {
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
  Interest.associate = (models) => {
    Interest.hasMany(models.InterestAdd, {
      foreignKey: {
        name: "interestId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Interest;
};
