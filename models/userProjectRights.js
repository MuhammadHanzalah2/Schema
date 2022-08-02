/*

Model For userProjectPolicies with three fields 'policiesJson', 'projectId' and 'userId'.

*/

module.exports = (sequelize, DataTypes) => {
  const userProjectRights = sequelize.define("userprojectrights", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // tUserId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // tProjectId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    policiesJson: {
      type: DataTypes.TEXT,
    },
    addedBy: {
      type: DataTypes.INTEGER,
    },
  });

  return userProjectRights;
};
