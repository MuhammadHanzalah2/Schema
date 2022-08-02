module.exports = (sequelize, DataTypes) => {
  const batchDetails = sequelize.define("batchDetails", {
    shopCode: {
      type: DataTypes.STRING,
    },
    displayMeta: {
      type: DataTypes.STRING,
    },
    QAStatus: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.DECIMAL(10, 8),
    },
    lng: {
      type: DataTypes.DECIMAL(11, 8),
    },
    attemptCount:{
      type:DataTypes.INTEGER,
      defaultValue:0
    }
  });
  return batchDetails;
};
