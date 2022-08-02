module.exports = (sequelize, DataTypes) => {
  const sku = sequelize.define("sku", {
    displayName: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING,
    },
    subCategory: {
      type: DataTypes.STRING,
    },
    companyRetail: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    variant: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    packType: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.STRING,
    },

    setupCategoryId: {
      type: DataTypes.INTEGER,
    },
    setupSubCategoryId: {
      type: DataTypes.INTEGER,
    },
    setupCompanyRetailId: {
      type: DataTypes.INTEGER,
    },
    setupBrandId: {
      type: DataTypes.INTEGER,
    },
    setupVariantId: {
      type: DataTypes.INTEGER,
    },
    setupSizeId: {
      type: DataTypes.INTEGER,
    },
    setupPackTypeId: {
      type: DataTypes.INTEGER,
    },
    setupOriginId: {
      type: DataTypes.INTEGER,
    },
    barCode: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
  });
  return sku;
};
