module.exports = (sequelize, DataTypes) => {
    const dgm_user_reach = sequelize.define(
      "dgm_user_reach",
      {
        userReachCount:{
          type:DataTypes.INTEGER,
          defaultValue:0
        },
      },
    );
    return dgm_user_reach;
  };