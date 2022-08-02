module.exports = (sequelize, DataTypes) => {
  const simpleSurvey_QALogs = sequelize.define("simpleSurvey_QALogs", {
    responseCode: {
      type: DataTypes.STRING,
    },
    remarks: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  });
  return simpleSurvey_QALogs;
};
