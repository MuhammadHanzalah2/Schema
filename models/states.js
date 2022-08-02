module.exports = (sequelize, Datatype) => {
  const states = sequelize.define("states", {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: Datatype.STRING,
      allowNull: false,
    },
    createdBy: {
      type: Datatype.INTEGER,
    },
    updatedBy: {
      type: Datatype.INTEGER,
    },
    label: { type: Datatype.STRING },
  });

  return states;
};
