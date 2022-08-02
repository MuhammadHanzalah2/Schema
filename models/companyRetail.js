module.exports = (sequelize, DataTypes) => {
  const companyRetail = sequelize.define("companyRetail", {
    setupCompanyRetailId: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
  return companyRetail;
};
