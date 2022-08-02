module.exports = (sequelize, DataTypes) => {
  const category_images = sequelize.define("category_images", {
    imageUrl: {
      type: DataTypes.TEXT,
    },
    categoryName: {
      type: DataTypes.STRING,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
  });
  return category_images;
};
