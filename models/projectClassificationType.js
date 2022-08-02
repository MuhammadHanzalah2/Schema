module.exports = (sequelize, DataTypes) => {
  const projectClassificationType = sequelize.define(
    "projectClassificationType",
    {
      name: {
        type: DataTypes.STRING,
      },
    }
  );
  return projectClassificationType;
};
