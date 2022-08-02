module.exports = (sequelize, DataTypes) => {
  const superAreas = sequelize.define("superAreas", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    label: { type: DataTypes.STRING },
  });

  return superAreas;
};
