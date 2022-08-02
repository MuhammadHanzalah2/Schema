module.exports = (sequelize, DataTypes) => {
  const fixedQuota = sequelize.define("fixedQuota", {
    quotaJSON: {
      type: DataTypes.JSON,
    },
    quotaName: { type: DataTypes.STRING },
    studyType: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
  });
  return fixedQuota;
};
