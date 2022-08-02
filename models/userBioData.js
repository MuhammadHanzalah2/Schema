/*

Model For tUsers with three fields 'name', 'userName', 'password' 

*/

module.exports = (sequelize, DataTypes) => {
    const user_bio_data = sequelize.define("user_bio_data", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      base: {
        type: DataTypes.STRING,
      },
    //   city: {
    //       type: DataTypes.STRING,
    //   },
      currentAddress: {
          type: DataTypes.STRING,
      },
      fatherName: {
          type: DataTypes.STRING,
      },
      cellNo: {
          type: DataTypes.STRING,
          unique: true,
      },
      residence: {
          type: DataTypes.STRING,
          unique: true,
      },
      cnic: {
          type: DataTypes.STRING,
          unique: true,
      },
      email: {
          type: DataTypes.STRING,
          unique: true,
      },
      DOB: {
          type: DataTypes.STRING,
      },
      education: {
          type: DataTypes.STRING,
      },
      experience: {
          type: DataTypes.STRING,
      },
      documents_images: {
          type: DataTypes.JSON,
      },
      pictures:{
        type: DataTypes.JSON,
      },
      requestedBy:{
          type:DataTypes.INTEGER,
      },
      requestedByName:{
          type: DataTypes.STRING,      
      }
    });
  
    return user_bio_data;
};
  