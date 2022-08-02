module.exports = (sequelize, DataTypes) => {
    const simpleSurvey_assets = sequelize.define(
      "simpleSurvey_assets",
      {
        type: {
          type: DataTypes.STRING,
        },
        path: {
          type: DataTypes.INTEGER,
        },
      }
    );
    return simpleSurvey_assets;
  };
  