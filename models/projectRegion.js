module.exports = (sequelize, DataTypes) => {
  const Project_Region = sequelize.define("projectregion", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });

  return Project_Region;
};
