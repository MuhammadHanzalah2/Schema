module.exports = (sequelize, DataTypes) => {
  const applicationActivityLogFile = sequelize.define(
    "applicationActivityLogFile",
    {
      fileName: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
    }
  );

  return applicationActivityLogFile;
};
