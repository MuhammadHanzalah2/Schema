module.exports = (sequelize, DataTypes) => {
  const System_Role = sequelize.define(
    "system_policies",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      json: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "system_policies",
      // timestamps:false
    }
  );

  return System_Role;
};
