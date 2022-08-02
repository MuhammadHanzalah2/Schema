module.exports = (sequelize, DataTypes) => {
  const Reconcile_Sku = sequelize.define("Reconcile_Sku", {
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
    barcode: {
      type: DataTypes.STRING,
    },
    shopCode: {
      type: DataTypes.STRING,
    },
    guid: {
      type: DataTypes.STRING,
    },
    skuStatus: {
      type: DataTypes.STRING,
    },
    reconcileStatus: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    },

    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    newRetailAuditStockId: {
      type: DataTypes.INTEGER,
    },
  });
  return Reconcile_Sku;
};
