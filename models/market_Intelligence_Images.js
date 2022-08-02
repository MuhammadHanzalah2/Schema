module.exports = (sequelize, DataTypes) => {
  const market_intelligence_images = sequelize.define(
    "market_intelligence_images",
    {
      imageUrl: {
        type: DataTypes.TEXT,
      },
      visitMonth: {
        type: DataTypes.STRING,
      },
    }
  );
  return market_intelligence_images;
};
