module.exports = (sequelize, DataTypes) => {
  const TypeCourse = sequelize.define(
    "TypeCourse",
    {
      nameTypeCourse: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  TypeCourse.associate = (models) => {
    TypeCourse.hasMany(models.Course, {
      foreignKey: {
        name: "TypeCourseId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return TypeCourse;
};
