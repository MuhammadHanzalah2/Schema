module.exports = (sequelize, DataTypes) => {
  const setupPackType = sequelize.define("setupPackType", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupPackType;
};
