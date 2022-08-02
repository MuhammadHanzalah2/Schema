/*

Model For tUsers with three fields 'name', 'userName', 'password' 

*/

module.exports = (sequelize, DataTypes) => {
  const tUser = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    temporaryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "active",
    },
  });

  return tUser;
};
