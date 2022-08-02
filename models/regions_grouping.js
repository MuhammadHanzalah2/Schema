module.exports = (sequelize, DataTypes) => {
  const regions_grouping = sequelize.define("regions_grouping", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  return regions_grouping;
};
