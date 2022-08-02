/*

Model For project_settings

*/

module.exports = (sequelize, DataType) => {
    const project_settings = sequelize.define("project_settings", {
      QAParameters: {
        type: DataType.STRING,
        allowNull:false
      },
  });
  
    return project_settings;
  };
  