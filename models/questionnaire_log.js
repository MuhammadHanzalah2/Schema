/*
Model For questionnaire_log 
*/
module.exports = (sequelize, DataTypes) => {
  const questionnaire = sequelize.define("questionnaire_log", {
    questionnaireJSON: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    version: {
      type: DataTypes.DECIMAL(10, 1),
      defaultValue: "1.0",
    },
    restore: {
      type: DataTypes.BOOLEAN,
    },
    previousVersion: {
      type: DataTypes.STRING,
    },
    trackVersion: {
      type: DataTypes.STRING,
    },
    // createdBy: {
    //   type: DataTypes.INTEGER,
    // },
    // updatedBy: {
    //   type: DataTypes.INTEGER,
    // },
  });
  return questionnaire;
};
