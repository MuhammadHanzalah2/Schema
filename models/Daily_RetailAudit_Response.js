module.exports = (sequelize, DataTypes) => {
  const dailyOutlets = sequelize.define(
    "Daily_RetailAudit_Response",
    {
      shopCode: {
        type: DataTypes.STRING,
      },
      guid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      projectId: {
        type: DataTypes.INTEGER,
      },
      sectionId: {
        type: DataTypes.INTEGER,
      },
      subAreaName: {
        type: DataTypes.STRING,
      },
      subAreaId: {
        type: DataTypes.INTEGER,
      },
      countryId: {
        type: DataTypes.INTEGER,
      },
      stateId: {
        type: DataTypes.INTEGER,
      },
      cityId: {
        type: DataTypes.INTEGER,
      },
      superAreaId: {
        type: DataTypes.INTEGER,
      },
      areaId: {
        type: DataTypes.INTEGER,
      },
      level: {
        type: DataTypes.INTEGER,
      },
      executionMonth: {
        type: DataTypes.STRING,
      },
      lat: {
        type: DataTypes.DECIMAL(10, 8),
      },
      lng: {
        type: DataTypes.DECIMAL(11, 8),
      },
      gpsPoints: {
        type: DataTypes.JSON,
      },
      LOI: {
        type: DataTypes.INTEGER,
      },
      startDateTime: {
        type: DataTypes.DATE,
      },
      endDateTime: {
        type: DataTypes.DATE,
      },
      displayMeta: {
        type: DataTypes.JSON,
      },
      shopClassification: {
        type: DataTypes.STRING,
      },
      marketIntelligenceComment: {
        type: DataTypes.TEXT,
      },
      QAStatus: {
        type: DataTypes.STRING,
        // defaultValue: "Pending",
      },
      DPBatchStatus: {
        type: DataTypes.STRING,
        // defaultValue: "Pending",
      },
      FieldBatchStatus: {
        type: DataTypes.STRING,
        // defaultValue: "Pending",
      },
      BTF: {
        type: DataTypes.BOOLEAN,
      },
      comment: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      visitMonth: {
        type: DataTypes.STRING,
      },
      fieldStartDate: {
        type: DataTypes.DATEONLY,
      },
      fieldEndDate: {
        type: DataTypes.DATEONLY,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      recordStatus: {
        type: DataTypes.STRING,
        defaultValue: "pending",
      },
    },
    {
      timestamps: false,
    }
  );
  return dailyOutlets;
};
