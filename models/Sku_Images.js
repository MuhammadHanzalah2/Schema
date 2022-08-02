module.exports = (sequelize, DataTypes) => {
  const sku_images = sequelize.define("sku_images", {
    imageUrl: {
      type: DataTypes.TEXT,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
  });
  return sku_images;
};
