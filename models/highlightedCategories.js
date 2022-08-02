module.exports = (sequelize, DataTypes) => {
  const highlightedCategories = sequelize.define("highlightedCategories", {
    highlightedCategoriesJSON: {
      type: DataTypes.JSON,
    },
  });
  return highlightedCategories;
};
