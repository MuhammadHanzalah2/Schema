/*

Model For userProjectPolicies with three fields 'policiesJson', 'projectId' and 'userId'.

*/

module.exports = (sequelize, DataTypes) => {
    const userProjectRightsBacklog = sequelize.define("userProjectRightsBacklog", {
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
      addedBy:{
        type:DataTypes.INTEGER
      },
      userId:{
        type:DataTypes.INTEGER
      },
      projectId:{
        type:DataTypes.INTEGER
      }
    });
  
    return userProjectRightsBacklog;
  };
  