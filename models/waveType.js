module.exports = (sequelize, DataTypes) => {
  const waveType = sequelize.define("waveType", {
    waveType: {
      type: DataTypes.STRING,
    },
  });
  return waveType;
};
