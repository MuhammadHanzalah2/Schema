module.exports = (sequelize, DataTypes) => {
  const tempStockAudit = sequelize.define("Temp_RetailAudit_Stock", {
    shopCode: {
      type: DataTypes.STRING,
    },
    skuDisplayName: {
      type: DataTypes.STRING,
    },
    skuId: {
      type: DataTypes.INTEGER,
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
    consumerPrice: {
      type: DataTypes.TEXT,
    },
    flag: {
      type: DataTypes.BOOLEAN,
    },
  });
  return tempStockAudit;
};
