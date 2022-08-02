module.exports = (sequelize, DataTypes) => {
  const ShopInvoices = sequelize.define("Shop_Invoices", {
    categoryName: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    invoiceUrl: {
      type: DataTypes.STRING,
    },
    mobileTime: {
      type: DataTypes.DATE,
    },
    shopCode: {
      type: DataTypes.STRING,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
    // dailyRecordId: {
    //   type: DataTypes.INTEGER,
    // },
  });
  return ShopInvoices;
};
