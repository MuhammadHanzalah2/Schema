module.exports = (sequelize, DataTypes) => {
  const QA_RetailAudit_Log = sequelize.define("QA_RetailAudit_Log", {
    shopCode: {
      type: DataTypes.STRING,
    },
    remarks: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  });
  return QA_RetailAudit_Log;
};
