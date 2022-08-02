module.exports = (sequelize, DataTypes) => {
  const retailAudit_UnbrandedStock = sequelize.define(
    "retailAudit_UnbrandedStock",
    {
      skuId: {
        type: DataTypes.INTEGER,
      },
      displayName: {
        type: DataTypes.STRING,
      },
      tags: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      subCategory: {
        type: DataTypes.STRING,
      },
      companyRetail: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      variant: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.STRING,
      },
      packType: {
        type: DataTypes.STRING,
      },
      origin: {
        type: DataTypes.STRING,
      },
      setupCategoryId: {
        type: DataTypes.INTEGER,
      },
      setupSubCategoryId: {
        type: DataTypes.INTEGER,
      },
      setupCompanyRetailId: {
        type: DataTypes.INTEGER,
      },
      setupBrandId: {
        type: DataTypes.INTEGER,
      },
      setupVariantId: {
        type: DataTypes.INTEGER,
      },
      setupSizeId: {
        type: DataTypes.INTEGER,
      },
      setupPackTypeId: {
        type: DataTypes.INTEGER,
      },
      setupOriginId: {
        type: DataTypes.INTEGER,
      },
      originId: {
        type: DataTypes.INTEGER,
      },
      projectId: {
        type: DataTypes.INTEGER,
      },
      barCode: {
        type: DataTypes.STRING,
      },
      ND: {
        type: DataTypes.STRING,
      },
      purchasePrice: {
        type: DataTypes.INTEGER,
      },
      unitPurchasePriceGMSKG: {
        type: DataTypes.STRING,
      },
      past30DaysSale: {
        type: DataTypes.INTEGER,
      },
      UnitPast30DaysSaleGMSKG: {
        type: DataTypes.STRING,
      },
      salePrice: {
        type: DataTypes.INTEGER,
      },
      weight: {
        type: DataTypes.INTEGER,
      },
      unitSalePriceGMSKG: {
        type: DataTypes.STRING,
      },
      flag: {
        // this property will be discussed later.
        type: DataTypes.BOOLEAN,
      },
      mobileTime: {
        type: DataTypes.DATE,
      },
      shopCode: {
        type: DataTypes.STRING,
      },
      skuStatus: {
        type: DataTypes.STRING,
      },
      visitMonth: {
        type: DataTypes.STRING,
      },
      executionMonth: {
        type: DataTypes.STRING,
      },
    }
  );
  return retailAudit_UnbrandedStock;
};
