module.exports = (sequelize, DataTypes) => {
  const setupOrigin = sequelize.define("setupOrigin", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupOrigin;
};
