module.exports = (sequelize, DataTypes) => {
  const quotaManagementTool = sequelize.define("quotaManagementTool", {
    quotaJSON: {
      type: DataTypes.JSON,
    },
    studyType: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    }
  });
  return quotaManagementTool;
};
