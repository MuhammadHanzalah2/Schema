/*

Model For system_users with two fields , 'username', 'password' 

*/

module.exports = (sequelize, DataTypes) => {
  const system_users = sequelize.define(
    "system_users",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return system_users;
};
