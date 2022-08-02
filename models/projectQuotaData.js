module.exports = (sequelize, DataTypes) => {
  const projectQuotaData = sequelize.define("projectQuotaData", {
    JSON: {
      type: DataTypes.JSON,
    },
    QAPassJSON: {
      type: DataTypes.JSON,
    },
    QAFailJSON: {
      type: DataTypes.JSON,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
    studyType: {
      type: DataTypes.STRING,
    },
  });
  return projectQuotaData;
};
