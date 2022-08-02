module.exports = (sequelize, DataTypes) => {
  const retailAudit_fastselling_sku = sequelize.define(
    "retailaudit_fastsellingsku",
    {
      skuName: { type: DataTypes.STRING },
      available: { type: DataTypes.INTEGER },
      shopCode: { type: DataTypes.STRING },
      mobileTime: { type: DataTypes.DATE },
      categoryName: { type: DataTypes.STRING },
      categoryId: { type: DataTypes.INTEGER },
      visitMonth: { type: DataTypes.STRING },
    }
  );
  return retailAudit_fastselling_sku;
};
