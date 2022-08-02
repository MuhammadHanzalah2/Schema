module.exports = (sequelize, DataTypes) => {
  const projectClassificationOneOffSetting = sequelize.define(
    "projectClassificationOneOffSetting",
    {
      name: {
        type: DataTypes.STRING,
      },
      fieldStartDate: {
        type: DataTypes.DATEONLY,
      },
      fieldEndDate: {
        type: DataTypes.DATEONLY,
      },
      studyType: {
        type: DataTypes.STRING,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
      },
      createdBy: {
        type: DataTypes.INTEGER,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
      },
    }
  );
  return projectClassificationOneOffSetting;
};
