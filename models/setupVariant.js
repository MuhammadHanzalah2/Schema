module.exports = (sequelize, DataTypes) => {
  const setupVariant = sequelize.define("setupVariant", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupVariant;
};
