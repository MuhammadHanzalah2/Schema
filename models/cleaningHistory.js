module.exports = (sequelize, DataTypes) => {
  const cleaningHistory = sequelize.define("cleaninghistory", {
    rejectedJson: {
      type: DataTypes.JSON,
    },
    approvedJson: {
      type: DataTypes.JSON,
    },
    sectionId: {
      type: DataTypes.INTEGER,
    },
  });
  return cleaningHistory;
};
