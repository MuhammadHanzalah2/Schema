module.exports = (sequelize, DataTypes) => {
  const setupCategory = sequelize.define("setupCategory", {
    name: {
      type: DataTypes.STRING,
      // unique: true,
    },
  });
  return setupCategory;
};
