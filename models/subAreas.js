module.exports = (sequelize, DataTypes) => {
  const subAreas = sequelize.define("subAreas", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      //allowNull: false,
      unique: false,
    },
    cordinates: {
      type: DataTypes.JSON,
    },
    filePath: {
      type: DataTypes.TEXT,
    },
    companyId: {
      type: DataTypes.INTEGER,
    },
    level: {
      type: DataTypes.INTEGER,
    },
    areaName: {
      type: DataTypes.STRING,
    },
    primaryPopulation: {
      type: DataTypes.INTEGER,
    },
    secondaryPopulation: {
      type: DataTypes.INTEGER,
    },
    primaryHousehold: {
      type: DataTypes.INTEGER,
    },
    secondaryHousehold: {
      type: DataTypes.INTEGER,
    },
    areaLatLng: {
      type: DataTypes.JSON,
    },
    MapImage: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    label: { type: DataTypes.STRING },
  });

  return subAreas;
};
