module.exports = (sequelize, DataTypes) => {
  const cleanings = sequelize.define(
    "cleanings",
    {
      json: {
        type: DataTypes.JSON,
      },
      question: {
        type: DataTypes.STRING,
      },
      source: {
        type: DataTypes.STRING,
      },
      sourceCode: {
        type: DataTypes.INTEGER,
      },
      displayName: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return cleanings;
};
