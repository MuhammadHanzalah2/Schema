module.exports = (sequelize, DataTypes) => {
  const clientApplicationVersion = sequelize.define(
    "clientApplicationVersion",
    {
      version: {
        type: DataTypes.DECIMAL(10, 1),
        defaultValue: "1.0",
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    }
  );
  return clientApplicationVersion;
};
