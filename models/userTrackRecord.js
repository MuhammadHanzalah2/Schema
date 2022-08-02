module.exports = (sequelize, DataTypes) => {
  const userTrackRecord = sequelize.define("userTrackRecord", {
    lat: {
      type: DataTypes.DECIMAL(10, 8),
    },
    lng: {
      type: DataTypes.DECIMAL(11, 8),
    },
    acc: {
      type: DataTypes.DECIMAL(11, 8),
    },
    locationTime: {
      type: DataTypes.DATE,
    },
    locationTime: {
      type: DataTypes.DATE,
    },
    subArea: {
      type: DataTypes.STRING,
    },
    subAeaCode: {
      type: DataTypes.STRING,
    },
    shopCode: {
      type: DataTypes.STRING,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
  });

  return userTrackRecord;
};
