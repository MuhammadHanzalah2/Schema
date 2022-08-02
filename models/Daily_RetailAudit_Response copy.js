module.exports = (sequelize, DataTypes) => {
  const dailyOutlets = sequelize.define("Daily_RetailAudit_Response", {
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
    // questionnaireId: {
    //   type: DataTypes.INTEGER,
    // },
    // answerJSON: {
    //   type: DataTypes.JSON,
    // },
    // answerResult: {
    //   type: DataTypes.JSON,
    // },
    executionMonth: {
      type: DataTypes.STRING,
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
    marketIntelligenceComment: {
      type: DataTypes.TEXT,
    },
    // shopProfileAudio: {
    //   type: DataTypes.STRING,
    // },
    // retialAuditAudio: {
    //   type: DataTypes.STRING,
    // },
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
  return dailyOutlets;
};
