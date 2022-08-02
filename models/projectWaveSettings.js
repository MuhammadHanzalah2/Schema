module.exports = (sequelize, DataTypes) => {
  const projectSettingWave = sequelize.define("projectWaveSetting", {
    waveStartDate: {
      type: DataTypes.DATEONLY,
    },
    waveEndDate: {
      type: DataTypes.DATEONLY,
    },
    waveName: {
      type: DataTypes.STRING,
    },
    activeWave: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    currentWave: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    studyType: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
  });
  return projectSettingWave;
};
