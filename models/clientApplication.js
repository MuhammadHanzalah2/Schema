module.exports = (sequelize, DataTypes) => {
  const clientApplications = sequelize.define("clientApplications", {
    guid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
    applicationName: {
      type: DataTypes.STRING,
    },
    studyType: {
      type: DataTypes.STRING,
    },
  });
  return clientApplications;
};
