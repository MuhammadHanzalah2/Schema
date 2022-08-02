module.exports = (sequelize, DataTypes) => {
  const subCategories = sequelize.define("subCategories", {
    setupSubCategoryId: {
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
  return subCategories;
};
