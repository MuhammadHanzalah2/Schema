module.exports = (sequelize, DataTypes) => {
  const areas = sequelize.define(
    "areas_copy",
    {
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
      // cityId: {
      //     type: DataType.INTEGER,
      //     allowNull: false,
      // },
      // stateId: {
      //     type: DataType.INTEGER,
      //     allowNull: false,
      // },
      // countryId: {
      //     type: DataType.INTEGER,
      //     allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );

  return areas;
};
