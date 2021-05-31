module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      courseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseTeacher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coursePrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coursePicture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseVideo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  Course.associate = (models) => {
    Course.belongsTo(models.TypeCourse, {
      foreignKey: {
        name: "TypeCourseId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });

    Course.hasOne(models.Order, {
      foreignKey: {
        name: "courseId",
        allowNull: false,
      },
      onUpdate: "RESTRICT",
      onDelete: "RESTRICT",
    });
  };
  return Course;
};
