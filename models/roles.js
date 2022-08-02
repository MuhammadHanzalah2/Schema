/*

Model For tRoles with four fields 'roleKey', 'roleType', 'childOf', 'json' 

*/

module.exports = (sequelize, DataTypes) => {
  const tRoles = sequelize.define("roles", {
    roleKey: {
      type: DataTypes.STRING,
    },
    roleType: {
      type: DataTypes.STRING,
    },
    childOf: {
      type: DataTypes.INTEGER,
    },
    json: {
      type: DataTypes.TEXT,
    },
  });
  return tRoles;
};
