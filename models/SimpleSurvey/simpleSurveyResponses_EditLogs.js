module.exports = (sequelize, DataTypes) => {
  const simpleSurveyResponses_EditLogs = sequelize.define(
    "simpleSurveyResponses_EditLogs",
    {
      version: {
        type: DataTypes.STRING,
      },
      responseCode: {
        type: DataTypes.STRING,
      },
      answerJSON: {
        type: DataTypes.JSON,
      },
      answerResult: {
        type: DataTypes.JSON,
      },
      guid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      //   userId: {
      //     type: DataTypes.INTEGER,
      //   },
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
      questionnaireId: {
        type: DataTypes.INTEGER,
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

      //   editedBy: {
      //     type: DataTypes.INTEGER,
      //   },
    }
  );
  return simpleSurveyResponses_EditLogs;
};
