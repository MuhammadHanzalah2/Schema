/*
Model For Questionnaire with three fields 'QuestionnaireJSON'
*/
module.exports = (sequelize, DataTypes) => {
  const questionnaire = sequelize.define("questionnaire", {
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
    trackVersion: {
      type: DataTypes.STRING,
    },
    previousVersion: {
      type: DataTypes.STRING,
    },
  });
  return questionnaire;
};
