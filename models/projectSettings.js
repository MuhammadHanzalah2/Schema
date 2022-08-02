module.exports = (sequelize, DataTypes) => {
  const projectSettings = sequelize.define("projectSettings", {
    QAParameters: { type: DataTypes.JSON, allowNull: false, defaultValue: [] },
    QAThreshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    projectQAPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    batchPassingPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    sampleGenerationPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    isAutoSave: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
    locationEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
    locationAccuracy: {
      type: DataTypes.INTEGER,
    },
    retailAuditAppFlow: {
      type: DataTypes.JSON,
    },
    metaData: {
      type: DataTypes.JSON,
    },
    retailAuditAppHandling: {
      type: DataTypes.JSON,
    },
    screenOut: {
      type: DataTypes.JSON,
    },
    isWebClient: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isPublish: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isClosed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
  });
  return projectSettings;
};
