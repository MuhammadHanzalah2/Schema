module.exports = (sequelize, DataTypes) => {
    const dgm_responses_status = sequelize.define(
      "dgm_responses_status",
      {
        status:{
            type:DataTypes.STRING,
        },
        interviewDateTime:{
            type:DataTypes.DATE,
        },
        remarks:{
            type:DataTypes.STRING
        },
        createdBy:{
            type:DataTypes.INTEGER
        },
        updatedBy:{
            type:DataTypes.INTEGER
        }
      },
    );
    return dgm_responses_status;
  };