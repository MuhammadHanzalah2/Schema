module.exports = (sequelize, DataTypes) => {
  const subAreas = sequelize.define(
    "subAreas_copy",
    {
      name: {
        type: DataTypes.STRING,
        //allowNull: false,
        // unique: false,
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
      // areaId: {
      //     type: Datatype.INTEGER,
      //     allowNull: false,
      // },
      // cityId: {
      //     type: Datatype.INTEGER,
      //     allowNull: false,
      // },
      // stateId: {
      //     type: Datatype.INTEGER,
      //     allowNull: false,
      // },
      // countryId: {
      //     type: Datatype.INTEGER,
      //     allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );

  return subAreas;
};
