module.exports = (sequelize, DataTypes) => {
  const regionLabel = sequelize.define("regionLabel", {
    label: {
      type: DataTypes.TEXT,
    },
  });

  return regionLabel;
};
