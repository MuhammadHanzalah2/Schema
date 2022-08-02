module.exports = (sequelize, DataTypes) => {
  const setupBrand = sequelize.define("setupBrand", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupBrand;
};
