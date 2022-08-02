module.exports = (sequelize, DataTypes) => {
  const simpleSurvey_shopQAResults = sequelize.define(
    "simpleSurvey_ResponseQAResults",
    {
      question: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.INTEGER,
      },
      weightage: {
        type: DataTypes.INTEGER,
      },
      tag: {
        type: DataTypes.STRING,
      },
    }
  );
  return simpleSurvey_shopQAResults;
};
