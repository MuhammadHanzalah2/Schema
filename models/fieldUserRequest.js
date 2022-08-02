/*

Field User Request Model

*/

module.exports = (sequelize, DataTypes) => {
    const field_user_request = sequelize.define("field_user_request", {
        requestStatus:{
            type: DataTypes.STRING,
            defaultValue:'Pending',
            allowNull: false,
        }
    });
    return field_user_request;
  };
  