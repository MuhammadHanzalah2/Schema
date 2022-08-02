module.exports = (sequelize, DataTypes) => {
  const simpleSurvey_responses = sequelize.define(
    "simpleSurvey_responses",
    {
      responseCode: {
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
      QAStatus: {
        type: DataTypes.STRING,
      },
      DPBatchStatus: {
        type: DataTypes.STRING,
      },
      FieldBatchStatus: {
        type: DataTypes.STRING,
      },
      remarks: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      answerJSON: {
        type: DataTypes.JSON,
      },
      answerResult: {
        type: DataTypes.JSON,
      },
      version: {
        type: DataTypes.DECIMAL(10, 1),
      },
      fieldStartDate: {
        type: DataTypes.DATEONLY,
      },
      fieldEndDate: {
        type: DataTypes.DATEONLY,
      },
      visitMonth: {
        type: DataTypes.STRING,
      },
      questionnaireId: {
        type: DataTypes.INTEGER,
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
      surveyQuotaResponse: {
        type: DataTypes.JSON,
      },
    },
    {
      timestamps: false,
    }
  );
  return simpleSurvey_responses;
};
