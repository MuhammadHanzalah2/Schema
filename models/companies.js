/*

Model For tCompany with one field 'companyName' 

*/

module.exports = (sequelize, DataTypes) => {
  const tCompany = sequelize.define("companies", {
    companyName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    // companyCode: { type: DataTypes.UUID },
    companyLogo: {
      type: DataTypes.STRING,
    },
  });
  return tCompany;
};
