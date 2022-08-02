module.exports = (sequelize, Datatype) => {
  const cities = sequelize.define("cities", {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: Datatype.STRING,
      allowNull: false,
    },
    latitude: {
      type: Datatype.STRING,
    },
    longitude: {
      type: Datatype.STRING,
    },
    createdBy: {
      type: Datatype.INTEGER,
    },
    updatedBy: {
      type: Datatype.INTEGER,
    },
    label: { type: Datatype.STRING },
  });

  return cities;
};
