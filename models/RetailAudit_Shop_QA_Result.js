module.exports = (sequelize, DataTypes) => {
  const RetailAudit_Shop_QA_Result = sequelize.define(
    "RetailAudit_Shop_QA_Result",
    {
      question: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.INTEGER,
      },
      weightage: {
        type: DataTypes.INTEGER,
      },
      tag: {
        type: DataTypes.STRING,
      },
    }
  );
  return RetailAudit_Shop_QA_Result;
};
