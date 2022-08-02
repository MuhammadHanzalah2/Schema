module.exports = (sequelize, DataTypes) => {
  const retailAudit_ReconcileHistorySKU = sequelize.define(
    "retailAudit_ReconcileHistorySKU",
    {
      reconcileSKUName: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
    }
  );
  return retailAudit_ReconcileHistorySKU;
};
