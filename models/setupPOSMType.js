module.exports = (sequelize, DataTypes) => {
  const setupPOSMType = sequelize.define("setupPOSMType", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupPOSMType;
};
