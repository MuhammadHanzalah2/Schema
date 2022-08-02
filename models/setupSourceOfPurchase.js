module.exports = (sequelize, DataTypes) => {
  const setupSourceOfPurchase = sequelize.define("setupSourceOfPurchase", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupSourceOfPurchase;
};
