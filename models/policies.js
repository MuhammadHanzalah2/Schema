/*

Model For tPolicies with two fields 'policyName' and 'policyDescription' 

*/

module.exports = (sequelize, DataTypes) => {
  const tPolicies = sequelize.define("policies", {
    policyName: {
      type: DataTypes.STRING,
      // unique: true,
    },
    policyDescription: {
      type: DataTypes.STRING,
      // unique: true,
    },
    policyJson: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
  });

  return tPolicies;
};
