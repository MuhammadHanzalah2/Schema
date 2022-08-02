module.exports = (sequelize, DataTypes) => {
  const regionLevelManagement = sequelize.define("regionLevelManagement", {
    unMerge: {
      type: DataTypes.TEXT,
    },
    merge: {
      type: DataTypes.TEXT,
    },
    regionRefData: {
      type: DataTypes.JSON,
    },
  });

  return regionLevelManagement;
};
