module.exports = (sequelize, DataTypes) => {
  const setupSubCategory = sequelize.define("setupSubCategory", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupSubCategory;
};
