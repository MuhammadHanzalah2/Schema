module.exports = (sequelize, DataTypes) => {
  const Reconcile_Retail_Audit_Stock = sequelize.define(
    "Reconcile_Retail_Audit_Stock",
    {
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
      executionMonth: {
        type: DataTypes.STRING,
      },
      mobileTime: {
        type: DataTypes.DATE,
      },
      barcode: {
        type: DataTypes.STRING,
      },
      shopCode: {
        type: DataTypes.STRING,
      },
    }
  );
  return Reconcile_Retail_Audit_Stock;
};
