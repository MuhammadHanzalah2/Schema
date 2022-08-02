module.exports = (sequelize, DataTypes) => {
  const batch = sequelize.define("batch", {
    batchStatus: {
      type: DataTypes.STRING,
    },
    totalBatchSample: {
      type: DataTypes.INTEGER,
    },
    batchCount: {
      type: DataTypes.INTEGER,
    },
    batchPass: {
      type: DataTypes.STRING,
    },
    batchFail: {
      type: DataTypes.STRING,
    },
    fieldDate:{
      type:DataTypes.DATE,
      allowNull:false
    },
    attemptCount:{
      type:DataTypes.INTEGER,
      defaultValue:0
    }
  });
  return batch;
};
