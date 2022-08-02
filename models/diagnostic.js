module.exports = (sequelize, DataTypes) => {
  const diagnostic = sequelize.define("diagnostic", {
    activity: {
      type: DataTypes.STRING,
    },
    action: {
      type: DataTypes.STRING,
    },
    actionLabel: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    statusDescription: {
      type: DataTypes.JSON,
    },
    IPAddress: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.STRING,
    },
    lng: {
      type: DataTypes.STRING,
    },
  });
  return diagnostic;
};
