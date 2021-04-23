module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      taskName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      taskDescription: {
        type: DataTypes.STRING,
      },
      taskPicture: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["DOING", "DONE", "DELETE"],
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Task.associate = (models) => {
    Task.belongsTo(models.User, {
      as: "UserId",
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Task.belongsTo(models.Interest, {
      as: "InterestId",
      foreignKey: {
        name: "interestId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Task;
};
