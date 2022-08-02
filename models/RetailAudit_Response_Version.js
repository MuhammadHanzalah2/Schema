module.exports = (sequelize, DataTypes) => {
  const ResponseMaster = sequelize.define("RetailAudit_Response_Version", {
    version: {
      type: DataTypes.STRING,
    },
    shopCode: {
      type: DataTypes.STRING,
    },
    answerJSON: {
      type: DataTypes.JSON,
    },
    answerResult: {
      type: DataTypes.JSON,
    },
    shopProfileAudio: {
      type: DataTypes.TEXT,
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
    questionnaireId: {
      type: DataTypes.INTEGER,
    },
    // shopFaciaImage: {
    //   type: DataTypes.TEXT,
    // },
    // shopImage1: {
    //   type: DataTypes.TEXT,
    // },
    // shopImage2: {
    //   type: DataTypes.TEXT,
    // },
    // shopImage3: {
    //   type: DataTypes.TEXT,
    // },
    // categoryImage1: {
    //   type: DataTypes.TEXT,
    // },
    // categoryImage2: {
    //   type: DataTypes.TEXT,
    // },
    // categoryImage3: {
    //   type: DataTypes.TEXT,
    // },
    // signBoardImg: {
    //   type: DataTypes.TEXT,
    // },
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
    // comment: {
    //   type: DataTypes.TEXT,
    // },
    // marketIntelligenceImage1: {
    //   type: DataTypes.TEXT,
    // },
    // marketIntelligenceImage2: {
    //   type: DataTypes.TEXT,
    // },
    // marketIntelligenceImage3: {
    //   type: DataTypes.TEXT,
    // },
  });
  return ResponseMaster;
};
