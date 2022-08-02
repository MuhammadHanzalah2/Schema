module.exports = (sequelize, DataTypes) => {
  const retail_audit_audios = sequelize.define("retail_audit_audios", {
    audioUrl: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.STRING,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
  });
  return retail_audit_audios;
};
