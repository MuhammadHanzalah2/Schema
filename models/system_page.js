/*

Model For system pages with three fields 'pageName', 'actions', 'pageRoute' 

*/

module.exports = (sequelize, DataTypes) => {
  const System_Page = sequelize.define(
    "system_pages",
    {
      pageName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      actions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pageRoute: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isSubTitlePage: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: "system_pages",
    }
  );

  return System_Page;
};
