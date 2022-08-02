/*

Model For tRoles with four fields 'roleKey', 'roleType', 'childOf', 'json' 

*/

module.exports = (sequelize, DataTypes) => {
  const roleGroup = sequelize.define("roleGroup", {
    roleGroup: {
      type: DataTypes.STRING,
    }
  });
  return roleGroup;
};
