module.exports = (sequelize, Datatype) => {
  const countries = sequelize.define("countries", {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: Datatype.STRING,
      allowNull: false,
      unique: true,
    },
    createdBy: {
      type: Datatype.INTEGER,
    },
    updatedBy: {
      type: Datatype.INTEGER,
    },
    enabled: {
      type: Datatype.BOOLEAN,
    },
    label: { type: Datatype.STRING },
  });

  return countries;
};
