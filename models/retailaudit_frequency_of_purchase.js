module.exports = (sequelize, DataTypes) => {
  const retailaudit_frequency_of_purchase = sequelize.define(
    "retailaudit_frequencyofpurchase",
    {
      shopCode: { type: DataTypes.STRING },
      brandName: { type: DataTypes.STRING },
      count: { type: DataTypes.INTEGER },
      mobileTime: { type: DataTypes.DATE },
      categoryName: { type: DataTypes.STRING },
      categoryId: { type: DataTypes.INTEGER },
      skuId: { type: DataTypes.INTEGER },
      visitMonth: { type: DataTypes.STRING },
    }
  );
  return retailaudit_frequency_of_purchase;
};
