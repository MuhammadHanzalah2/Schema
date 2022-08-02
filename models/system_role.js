/*

Model For system pages with two fields 'roleName', 'completeJSON' 

*/

module.exports = (sequelize, DataTypes) => {
    const System_Role = sequelize.define("system_roles", {
        roleName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completeJSON:{
            type:DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName:'system_roles',
        // timestamps:false
    });
  
    return System_Role;
};
  