/*
Model For tSection with three fields 'sectionName', 'sectionDescription', 'sequence' 
*/
module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define("section", {
    sectionName: {
      type: DataTypes.STRING,
    },
    sectionDescription: {
      type: DataTypes.STRING,
    },
    sequence: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
  });
  return section;
};
