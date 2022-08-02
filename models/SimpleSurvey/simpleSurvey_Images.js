module.exports = (sequelize, DataTypes) => {
  const simpleSurvey_images = sequelize.define("simpleSurvey_images", {
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
  return simpleSurvey_images;
};
