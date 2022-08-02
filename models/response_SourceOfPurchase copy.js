module.exports = (sequelize, DataTypes) => {
  const response_SourceOfPurchase = sequelize.define(
    "response_SourceOfPurchase",
    {
      categoryId: {
        type: DataTypes.INTEGER,
      },
      categoryName: {
        type: DataTypes.STRING,
      },
      brandName: {
        type: DataTypes.STRING,
      },
      packtype: {
        type: DataTypes.STRING,
      },
      directFromCompany: {
        type: DataTypes.STRING,
      },
      wholesale: {
        type: DataTypes.STRING,
      },
      other: {
        type: DataTypes.STRING,
      },
      shopCode: {
        type: DataTypes.STRING,
      },
      mobileTime: {
        type: DataTypes.DATE,
      },
      imtLmt: {
        type: DataTypes.INTEGER,
      },
      metro: {
        type: DataTypes.INTEGER,
      },
      carrefour: {
        type: DataTypes.INTEGER,
      },
      subD: {
        type: DataTypes.INTEGER,
      },
    }
  );
  return response_SourceOfPurchase;
};
