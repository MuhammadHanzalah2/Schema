module.exports = (sequelize, DataTypes) => {
  const response_POSM = sequelize.define("response_POSM", {
    categoryId: {
      type: DataTypes.INTEGER,
    },
    categoryName: {
      type: DataTypes.STRING,
    },
    brandName: {
      type: DataTypes.STRING,
    },
    posm: {
      type: DataTypes.STRING,
    },
    inside: {
      type: DataTypes.STRING,
    },
    insideImage: {
      type: DataTypes.STRING,
    },
    outside: {
      type: DataTypes.STRING,
    },
    outsideImage: {
      type: DataTypes.STRING,
    },
    shopCode: {
      type: DataTypes.STRING,
    },
    mobileTime: {
      type: DataTypes.DATE,
    },
    visitMonth: {
      type: DataTypes.STRING,
    },
    // dailyRecordId: {
    //   type: DataTypes.INTEGER,
    // },
  });
  return response_POSM;
};
