module.exports = (sequelize, DataTypes) => {
  const packType = sequelize.define("packType", {
    setupPackTypeId: {
      type: DataTypes.STRING,
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
  return packType;
};
