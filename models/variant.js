module.exports = (sequelize, DataTypes) => {
  const variant = sequelize.define("variant", {
    setupVariantId: {
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
  return variant;
};
