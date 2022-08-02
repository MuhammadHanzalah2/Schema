module.exports = (sequelize, DataTypes) => {
  const setupPlacement = sequelize.define("setupPlacement", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupPlacement;
};
