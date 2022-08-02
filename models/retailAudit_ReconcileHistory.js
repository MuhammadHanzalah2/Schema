module.exports = (sequelize, DataTypes) => {
  const retailAudit_ReconcileHistory = sequelize.define(
    "retailAudit_ReconcileHistory",
    {
      name: {
        type: DataTypes.STRING,
      },
      masterName: {
        type: DataTypes.STRING,
      },
    }
  );
  return retailAudit_ReconcileHistory;
};
