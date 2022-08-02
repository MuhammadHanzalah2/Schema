module.exports = (sequelize, DataTypes) => {
  const brand = sequelize.define("brand", {
    setupBrandId: {
      type: DataTypes.INTEGER,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
  return brand;
};
