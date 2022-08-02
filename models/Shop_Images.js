module.exports = (sequelize, DataTypes) => {
  const shop_images = sequelize.define("shop_images", {
    imageUrl: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.STRING,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
  });
  return shop_images;
};
