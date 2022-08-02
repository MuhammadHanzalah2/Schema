module.exports = (sequelize, DataTypes) => {
    const dgm_responses = sequelize.define(
      "dgm_responses",
      {
        respondentName:{
          type:DataTypes.STRING,
        },
        respondentContact:{
          type:DataTypes.STRING,
        },
        lat: {
          type: DataTypes.DECIMAL(10, 8),
        },
        lng: {
          type: DataTypes.DECIMAL(11, 8),
        },
        LOI: {
          type: DataTypes.FLOAT,
        },
        code:{
          type:DataTypes.STRING,
        },
        startDateTime: {
          type: DataTypes.DATE,
        },
        endDateTime: {
          type: DataTypes.DATE,
        },
        sourceOfReach:{
          type:DataTypes.STRING,
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
        answerJSON:{
          type:DataTypes.JSON
        },
        answerResult:{
          type:DataTypes.JSON
        },
        
      },
    );
    return dgm_responses;
  };
  