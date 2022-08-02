/*

Model For userProjectPolicies with three fields 'policiesJson', 'projectId' and 'userId'.

*/



module.exports = (sequelize, DataTypes) => {
    const AddedBy = sequelize.define("AddedBy", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
     
    });
  
    return AddedBy;
  };
  