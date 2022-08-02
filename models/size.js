module.exports = (sequelize, DataTypes) => {
  const size = sequelize.define("size", {
    setupSizeId: {
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
  return size;
};
