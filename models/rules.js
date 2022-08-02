/*

Model For tProjects with four fields 'projectName', 'description', 'type' and 'createdBy' 

*/

module.exports = (sequelize, DataTypes) => {
  const tRules = sequelize.define("rules", {
    ruleName: {
      type: DataTypes.STRING,
      unique: true,
    },
    ruleDescription: {
      type: DataTypes.STRING,
      unique: true,
    },
    ruleJson: {
      type: DataTypes.TEXT,
    },
  });

  return tRules;
};
