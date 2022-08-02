module.exports = (sequelize, DataTypes) => {
  const studyTypes = sequelize.define("studyTypes", {
    studyType: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  return studyTypes;
};
