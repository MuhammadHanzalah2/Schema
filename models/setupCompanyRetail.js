module.exports = (sequelize, DataTypes) => {
  const setupCompanyRetail = sequelize.define("setupCompanyRetail", {
    name: {
      type: DataTypes.STRING,
    },
  });
  return setupCompanyRetail;
};
