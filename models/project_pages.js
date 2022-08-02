/*

Model For project pages with three fields 'pageName', 'actions', 'pageRoute' 

*/

module.exports = (sequelize, DataTypes) => {
  const Project_Page = sequelize.define(
    "project_pages",
    {
      pageName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      pageNameWiki: {
        type: DataTypes.STRING,
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
      pageDetails: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "project_pages",
    }
  );

  return Project_Page;
};
