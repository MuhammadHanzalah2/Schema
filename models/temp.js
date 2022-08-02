module.exports = (sequelize, Datatype) => {
  const countries = sequelize.define("temp", {
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
  });

  return countries;
};
