module.exports = (sequelize, DataTypes) => {
  const simpleSurvey_audios = sequelize.define("simpleSurvey_audios", {
    name: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },

    type: {
      type: DataTypes.STRING,
    },
    responseCode: {
      type: DataTypes.STRING,
    },
    questionnaireId: {
      type: DataTypes.INTEGER,
    },
    projectId: {
      type: DataTypes.INTEGER,
    },
  });
  return simpleSurvey_audios;
};
