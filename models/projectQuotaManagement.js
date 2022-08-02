module.exports = (sequelize, DataTypes) => {
  const projectQuotaManagement = sequelize.define("projectQuotaManagement", {
    quotaJSON: {
      type: DataTypes.JSON,
    },
    studyType: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
  });
  return projectQuotaManagement;
};
