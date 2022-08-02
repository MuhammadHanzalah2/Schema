module.exports = (sequelize, DataTypes) => {
  const setupSize = sequelize.define("setupSize", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupSize;
};
