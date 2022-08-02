/*

Model For system modules with one field 'moduleName' 

*/

module.exports = (sequelize, DataTypes) => {
  const System_Module = sequelize.define(
    "system_module",
    {
      moduleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "system_modules",
    }
  );

  return System_Module;
};
