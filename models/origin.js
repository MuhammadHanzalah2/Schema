module.exports = (sequelize, DataTypes) => {
  const origin = sequelize.define("origin", {
    setupOriginId: {
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
  return origin;
};
