module.exports = (sequelize, DataTypes) => {
  const stockAudit = sequelize.define("RetailAudit_Stock", {
    userId: {
      type: DataTypes.INTEGER,
    },
    projectId: {
      type: DataTypes.INTEGER,
    },
    shopCode: {
      type: DataTypes.STRING,
    },
    skuDisplayName: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.STRING,
    },
    skuId: {
      type: DataTypes.INTEGER,
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
    ND: {
      type: DataTypes.TEXT,
    },
    stockFront: {
      type: DataTypes.TEXT,
    },
    stockBack: {
      type: DataTypes.TEXT,
    },
    facing: {
      type: DataTypes.TEXT,
    },
    quantity: {
      type: DataTypes.TEXT,
    },
    purchasePrice: {
      type: DataTypes.TEXT,
    },
    MRP: {
      type: DataTypes.TEXT,
    },
    consumerPrice: {
      type: DataTypes.TEXT,
    },
    flag: {
      type: DataTypes.BOOLEAN,
    },
    executionMonth: {
      type: DataTypes.STRING,
    },
    mobileTime: {
      type: DataTypes.DATE,
    },
    barcode: {
      type: DataTypes.STRING,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
  });
  return stockAudit;
};
