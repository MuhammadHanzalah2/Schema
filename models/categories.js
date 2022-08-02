module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categories", {
    setupCategoryId: {
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
  return Categories;
};
