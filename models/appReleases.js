module.exports = (sequelize, DataTypes) => {
  const appReleases = sequelize.define("appReleases", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    version: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false,
      unique: true,
    },
    appName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    appType: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
      defaultValue:false
    }
  });

  return appReleases;
};
