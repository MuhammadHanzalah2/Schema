const Sequelize = require("sequelize");

//Production
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    // dialectOptions: {
    //   options: {
    //     useUTC: false, // for reading from database
    //   },
    //   timezone: "+05:00",
    // },
    // timezone: "+05:00", // for writing
  }
);

//Development
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER1,
//   process.env.DB_PASS1,
//   {
//     host: process.env.DB_HOST1,
//     dialect: process.env.DB_TYPE,
//     // dialectOptions: {
//     //   options: {
//     //     useUTC: false, // for reading from database
//     //   },
//     //   timezone: "+05:00",
//     // },
//     // timezone: "+05:00", // for writing
//   }
// );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userProjectRights = require("./models/userProjectRights")(
  sequelize,
  Sequelize
);
db.users = require("./models/users")(sequelize, Sequelize);
db.roles = require("./models/roles")(sequelize, Sequelize);
db.policies = require("./models/policies")(sequelize, Sequelize);
db.companies = require("./models/companies")(sequelize, Sequelize);
db.project_pages = require("./models/project_pages")(sequelize, Sequelize);
db.rules = require("./models/rules")(sequelize, Sequelize);
db.projectTypes = require("./models/projectTypes")(sequelize, Sequelize);
db.projects = require("./models/projects")(sequelize, Sequelize);
db.projectSettings = require("./models/projectSettings")(sequelize, Sequelize);
db.projectWaveSettings = require("./models/projectWaveSettings")(
  sequelize,
  Sequelize
);
db.waveType = require("./models/waveType")(sequelize, Sequelize);
db.projectClassificationType = require("./models/projectClassificationType")(
  sequelize,
  Sequelize
);
db.projectClassificationOneOffSetting =
  require("./models/projectClassificationOneOffSetting")(sequelize, Sequelize);
db.system_users = require("./models/system_users")(sequelize, Sequelize);
db.system_role = require("./models/system_role")(sequelize, Sequelize);
db.system_page = require("./models/system_page")(sequelize, Sequelize);
db.system_module = require("./models/system_module")(sequelize, Sequelize);
db.system_policy = require("./models/system_policy")(sequelize, Sequelize);
db.subAreas = require("./models/subAreas")(sequelize, Sequelize);
db.regionsGrouping = require("./models/regions_grouping")(sequelize, Sequelize);
db.subareas_copy = require("./models/subareas_copy")(sequelize, Sequelize);
db.areas = require("./models/areas")(sequelize, Sequelize);
db.areas_copy = require("./models/areas_copy")(sequelize, Sequelize);
db.superAreas = require("./models/superAreas")(sequelize, Sequelize);
db.cities = require("./models/cities")(sequelize, Sequelize);
db.states = require("./models/states")(sequelize, Sequelize);
db.countries = require("./models/countries")(sequelize, Sequelize);
db.sections = require("./models/sections")(sequelize, Sequelize);
db.questionnaires = require("./models/questionnaires")(sequelize, Sequelize);
db.questionnaire_log = require("./models/questionnaire_log")(
  sequelize,
  Sequelize
);
db.cleaningHistory = require("./models/cleaningHistory")(sequelize, Sequelize);
db.user_region = require("./models/user_region")(sequelize, Sequelize);
db.projectRegions = require("./models/projectRegion")(sequelize, Sequelize);
db.cleanings = require("./models/cleanings")(sequelize, Sequelize);
db.userAssignPolicy = sequelize.define("userAssignPolicy", {});

db.field_user_request = require("./models/fieldUserRequest")(
  sequelize,
  Sequelize
);

db.running_meta_data = require("./models/running_meta_data")(
  sequelize,
  Sequelize
);
db.t_product_rotation_meta = require("./models/t_product_rotation_meta")(
  sequelize,
  Sequelize
);
db.userBioData = require("./models/userBioData")(sequelize, Sequelize);
db.studyType = require("./models/studyType")(sequelize, Sequelize);
db.clientApplication = require("./models/clientApplication")(
  sequelize,
  Sequelize
);
db.clientApplicationVersion = require("./models/clientApplicationVersion")(
  sequelize,
  Sequelize
);

db.categories = require("./models/categories")(sequelize, Sequelize);
db.subCategories = require("./models/subCategories")(sequelize, Sequelize);
db.companyRetail = require("./models/companyRetail")(sequelize, Sequelize);
db.brand = require("./models/brand")(sequelize, Sequelize);
db.variant = require("./models/variant")(sequelize, Sequelize);
db.size = require("./models/size")(sequelize, Sequelize);
db.packType = require("./models/packType")(sequelize, Sequelize);
db.origin = require("./models/origin")(sequelize, Sequelize);
db.temp = require("./models/temp")(sequelize, Sequelize);
db.quotaManagementTool = require("./models/quotaManagementTool")(
  sequelize,
  Sequelize
);

db.setupCategory = require("./models/setupCategory")(sequelize, Sequelize);
db.setupSubCategory = require("./models/setupSubCategory")(
  sequelize,
  Sequelize
);
db.setupCompanyRetail = require("./models/setupCompanyRetail")(
  sequelize,
  Sequelize
);
db.setupBrand = require("./models/setupBrand")(sequelize, Sequelize);
db.setupVariant = require("./models/setupVariant")(sequelize, Sequelize);
db.setupSize = require("./models/setupSize")(sequelize, Sequelize);
db.setupPackType = require("./models/setupPackType")(sequelize, Sequelize);
db.setupOrigin = require("./models/setupOrigin")(sequelize, Sequelize);
db.sku = require("./models/sku")(sequelize, Sequelize);
db.batch = require("./models/batch")(sequelize, Sequelize);
db.batchDetails = require("./models/batchDetails")(sequelize, Sequelize);
db.Daily_RetailAudit_Response = require("./models/Daily_RetailAudit_Response")(
  sequelize,
  Sequelize
);
db.setupSourceOfPurchase = require("./models/setupSourceOfPurchase")(
  sequelize,
  Sequelize
);

db.setupPOSMType = require("./models/setupPOSMType")(sequelize, Sequelize);
db.setupPlacement = require("./models/setupPlacement")(sequelize, Sequelize);
db.highlightedCategories = require("./models/highlightedCategories")(
  sequelize,
  Sequelize
);
db.RetailAudit_Stock = require("./models/RetailAudit_Stock")(
  sequelize,
  Sequelize
);
db.retailAudit_UnbrandedStock = require("./models/retailAudit_UnbrandedStock")(
  sequelize,
  Sequelize
);
db.response_POSM = require("./models/response_POSM")(sequelize, Sequelize);
db.response_SourceOfPurchase = require("./models/response_SourceOfPurchase")(
  sequelize,
  Sequelize
);
db.QA_RetailAudit_Log = require("./models/QA_RetailAudit_Log")(
  sequelize,
  Sequelize
);
db.RetailAudit_Shop_QA_Result = require("./models/RetailAudit_Shop_QA_Result")(
  sequelize,
  Sequelize
);
db.projectQuotaManagement = require("./models/projectQuotaManagement")(
  sequelize,
  Sequelize
);
//
//=================================== RCube =======================================

db.RetailAudit_Response = require("./models/RetailAudit_Response")(
  sequelize,
  Sequelize
);
db.RetailAudit_Response_Version =
  require("./models/RetailAudit_Response_Version")(sequelize, Sequelize);
db.RetailAudit_Response_Edit = require("./models/RetailAudit_Response_Edit")(
  sequelize,
  Sequelize
);
db.Daily_RetailAudit_Response = require("./models/Daily_RetailAudit_Response")(
  sequelize,
  Sequelize
);
db.RetailAudit_Stock = require("./models/RetailAudit_Stock")(
  sequelize,
  Sequelize
);
db.shopInvoices = require("./models/Shop_Invoices")(sequelize, Sequelize);
db.response_POSM = require("./models/response_POSM")(sequelize, Sequelize);
db.response_SourceOfPurchase = require("./models/response_SourceOfPurchase")(
  sequelize,
  Sequelize
);
db.Shop_Images = require("./models/Shop_Images")(sequelize, Sequelize);
db.Category_Images = require("./models/Category_Images")(sequelize, Sequelize);
db.market_Intelligence_Images = require("./models/market_Intelligence_Images")(
  sequelize,
  Sequelize
);
db.Retial_Audit_Audios = require("./models/Retial_Audit_Audios")(
  sequelize,
  Sequelize
);
db.Sku_Images = require("./models/Sku_Images")(sequelize, Sequelize);

db.Reconcile_Sku = require("./models/Reconcile_Sku")(sequelize, Sequelize);
db.Reconcile_Retail_Audit_Stock =
  require("./models/Reconcile_Retail_Audit_Stock")(sequelize, Sequelize);
db.retailAudit_fastselling_sku =
  require("./models/retailAudit_fastselling_sku")(sequelize, Sequelize);

// db.retailaudit_frequency_of_purchase =
//   require("./models/retailaudit_frequency_of_purchase")(sequelize, Sequelize);
db.retailaudit_frequency_of_purchase =
  require("./models/retailaudit_frequency_of_purchase")(sequelize, Sequelize);

db.retailAudit_ReconcileHistory =
  require("./models/retailAudit_ReconcileHistory")(sequelize, Sequelize);

db.retailAudit_ReconcileHistorySKU =
  require("./models/retailAudit_ReconcileHistorySKU")(sequelize, Sequelize);

//==================================== DGM Models Import ===========================
db.dgm_responses = require("./models/DGM/dgm_responses")(sequelize, Sequelize);
db.dgm_user_reach = require("./models/DGM/dgm_user_reach")(
  sequelize,
  Sequelize
);
db.dgm_responses_status = require("./models/DGM/dgm_responses_status")(
  sequelize,
  Sequelize
);

db.userTrackRecord = require("./models/userTrackRecord")(sequelize, Sequelize);
db.applicationActivityLogFile = require("./models/applicationActivityLogFile")(
  sequelize,
  Sequelize
);

//==================================== SimpleSurvey Models Import ===========================
db.simpleSurvey_responses = require("./models/SimpleSurvey/response")(
  sequelize,
  Sequelize
);
db.simpleSurvey_QALogs = require("./models/SimpleSurvey/QALogs")(
  sequelize,
  Sequelize
);
db.simpleSurvey_shopQAResults = require("./models/SimpleSurvey/shopQAResult")(
  sequelize,
  Sequelize
);
db.simpleSurveyImages = require("./models/SimpleSurvey/simpleSurvey_Images")(
  sequelize,
  Sequelize
);

db.simpleSurveyAudios = require("./models/SimpleSurvey/simpleSurvey_Audios")(
  sequelize,
  Sequelize
);

db.simpleSurveyResponses_EditLogs =
  require("./models/SimpleSurvey/simpleSurveyResponses_EditLogs")(
    sequelize,
    Sequelize
  );

db.diagnostic = require("./models/diagnostic")(sequelize, Sequelize);

db.systemModules_systemPages_roles = sequelize.define(
  "systemModules_systemPages_roles",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    moduleId: {
      type: Sequelize.DataTypes.INTEGER,
    },
  }
);

db.roleGroup = require("./models/roleGroup")(sequelize, Sequelize);

db.rules_policies = sequelize.define("rules_policies", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

db.projectPages_rules = sequelize.define("projectPages_rules", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

db.regionLevelManagement = require("./models/regionLevelManagement")(
  sequelize,
  Sequelize
);
db.fixedQuota = require("./models/fixedQuota")(sequelize, Sequelize);
db.projectQuotaData = require("./models/projectQuotaData")(
  sequelize,
  Sequelize
);
db.regionLabel = require("./models/regionLabel")(sequelize, Sequelize);

db.rules.belongsToMany(db.policies, {
  through: "rules_policies",
});
db.policies.belongsToMany(db.rules, {
  through: "rules_policies",
});

db.rules.belongsToMany(db.project_pages, {
  through: "projectPages_rules",
});
db.project_pages.belongsToMany(db.rules, {
  through: "projectPages_rules",
});

// =================================== Relations ===================================

db.system_module.hasMany(db.system_page);
db.system_page.belongsTo(db.system_module);

// =================================== Projecttype Relation End ===========================================
db.projectTypes.hasMany(db.project_pages);
db.project_pages.belongsTo(db.projectTypes);

db.projectTypes.hasMany(db.rules);
db.rules.belongsTo(db.projectTypes);

db.projectTypes.hasMany(db.projects);
db.projects.belongsTo(db.projectTypes);

db.projectTypes.hasMany(db.studyType);
db.studyType.belongsTo(db.projectTypes);

// =================================== Projecttype Relation End ===========================================

// =================================== Company Relation Start ===========================================
// companies has many roles
db.companies.hasMany(db.roles);
db.roles.belongsTo(db.companies);

// companies has many projects
db.companies.hasMany(db.projects);
db.projects.belongsTo(db.companies);

db.companies.hasMany(db.policies);
db.policies.belongsTo(db.companies);

db.companies.hasMany(db.field_user_request);
db.field_user_request.belongsTo(db.companies);

db.companies.hasMany(db.setupCategory);
db.setupCategory.belongsTo(db.companies);

db.companies.hasMany(db.setupSubCategory);
db.setupSubCategory.belongsTo(db.companies);

db.companies.hasMany(db.setupBrand);
db.setupBrand.belongsTo(db.companies);

db.companies.hasMany(db.setupVariant);
db.setupVariant.belongsTo(db.companies);

db.companies.hasMany(db.setupSize);
db.setupSize.belongsTo(db.companies);

db.companies.hasMany(db.setupPackType);
db.setupPackType.belongsTo(db.companies);

db.companies.hasMany(db.setupCompanyRetail);
db.setupCompanyRetail.belongsTo(db.companies);

db.companies.hasMany(db.setupOrigin);
db.setupOrigin.belongsTo(db.companies);

db.companies.hasMany(db.regionsGrouping);
db.regionsGrouping.belongsTo(db.companies);

// =================================== Company Relation End ===========================================

//==================================== Setup Categories Relations ==================================

db.setupCategory.hasMany(db.setupSubCategory);
db.setupSubCategory.belongsTo(db.setupCategory);

db.setupSubCategory.hasMany(db.setupBrand);
db.setupBrand.belongsTo(db.setupSubCategory);

db.setupBrand.hasMany(db.setupVariant);
db.setupVariant.belongsTo(db.setupBrand);

db.setupVariant.hasMany(db.setupSize);
db.setupSize.belongsTo(db.setupVariant);

db.setupSize.hasMany(db.setupPackType);
db.setupPackType.belongsTo(db.setupSize);

db.setupPackType.hasMany(db.setupCompanyRetail);
db.setupCompanyRetail.belongsTo(db.setupPackType);

db.setupCompanyRetail.hasMany(db.setupOrigin);
db.setupOrigin.belongsTo(db.setupCompanyRetail);

// =================================== End setup categories Relatikon ==============================

// =================================== Role Relation Start ===========================================

db.roles.hasMany(db.users);
db.users.belongsTo(db.roles);

// =================================== Role Relation End ===========================================

// =================================== User Relation Start ===========================================

db.users.belongsToMany(db.projects, { through: db.userProjectRights });
db.projects.belongsToMany(db.users, { through: db.userProjectRights });

db.users.hasMany(db.userProjectRights);
db.userProjectRights.belongsTo(db.users);

db.userProjectRights.belongsTo(db.users, {
  as: "addedByUser",
  foreignKey: "addedBy",
});

db.users.hasMany(db.users, {
  as: "userList",
  foreignKey: "createdBy",
  useJunctionTable: false,
});
db.users.belongsTo(db.users, { as: "created", foreignKey: "createdBy" });

db.users.hasOne(db.userBioData);
db.userBioData.belongsTo(db.users);

db.users.hasMany(db.cleaningHistory, { foreignKey: "addedBy" });
db.cleaningHistory.belongsTo(db.users, { foreignKey: "addedBy" });

db.users.hasMany(db.user_region, { foreignKey: "assignedBy" });
db.user_region.belongsTo(db.users, { foreignKey: "assignedBy" });

db.users.hasMany(db.user_region, { foreignKey: "reportingTo" });
db.user_region.belongsTo(db.users, { foreignKey: "reportingTo" });

db.users.hasOne(db.userBioData);
db.userBioData.belongsTo(db.users);

db.users.hasMany(db.user_region);
db.user_region.belongsTo(db.users);

db.users.hasMany(db.batch, { foreignKey: "createdBy" });
db.batch.belongsTo(db.users, { foreignKey: "createdBy" });

db.users.hasMany(db.batch, { foreignKey: "QAedBy" });
db.batch.belongsTo(db.users, { foreignKey: "QAedBy" });

db.users.hasMany(db.QA_RetailAudit_Log, { foreignKey: "QABy", as: "QAedBy" });
db.QA_RetailAudit_Log.belongsTo(db.users, {
  foreignKey: "QABy",
  as: "QAedBy",
});

db.users.hasMany(db.QA_RetailAudit_Log, {
  foreignKey: "respondantId",
  as: "respondant",
});
db.QA_RetailAudit_Log.belongsTo(db.users, {
  foreignKey: "respondantId",
  as: "respondant",
});

db.users.hasMany(db.userAssignPolicy, {
  foreignKey: "assignedBy",
  as: "assignBy",
});
db.userAssignPolicy.belongsTo(db.users, {
  foreignKey: "assignedBy",
  as: "assignBy",
});

db.users.hasMany(db.projectRegions, {
  foreignKey: "importedBy",
  as: "importBy",
});
db.projectRegions.belongsTo(db.users, {
  foreignKey: "importedBy",
  as: "importBy",
});

db.users.hasMany(db.questionnaires, {
  foreignKey: "createdBy",
});
db.questionnaires.belongsTo(db.users, {
  foreignKey: "createdBy",
});

db.users.hasMany(db.questionnaires, {
  foreignKey: "updatedBy",
});
db.questionnaires.belongsTo(db.users, {
  foreignKey: "updatedBy",
});

db.users.hasMany(db.questionnaire_log, {
  foreignKey: "createdBy",
});
db.questionnaire_log.belongsTo(db.users, {
  foreignKey: "createdBy",
});

db.users.hasMany(db.questionnaire_log, {
  foreignKey: "updatedBy",
});
db.questionnaire_log.belongsTo(db.users, {
  foreignKey: "updatedBy",
});

// =================================== User Relation End ===========================================

// =================================== Project Relation Start ===========================================

db.projects.belongsToMany(db.subAreas, { through: db.projectRegions });
db.subAreas.belongsToMany(db.projects, { through: db.projectRegions });

db.projects.hasMany(db.sections);
db.sections.belongsTo(db.projects);

db.projects.hasMany(db.user_region);
db.user_region.belongsTo(db.projects);

db.projects.hasMany(db.cleanings);
db.cleanings.belongsTo(db.projects);

db.projects.hasMany(db.sku);
db.sku.belongsTo(db.projects);

db.projects.hasMany(db.categories);
db.categories.belongsTo(db.projects);

//
db.projects.hasMany(db.projectSettings);
db.projectSettings.belongsTo(db.projects);

db.projects.hasMany(db.quotaManagementTool);
db.quotaManagementTool.belongsTo(db.projects);

// =================================== Project Relation End ===========================================

// =================================== Policies Relation Start ===========================================

db.policies.belongsToMany(db.userProjectRights, {
  through: db.userAssignPolicy,
});
db.userProjectRights.belongsToMany(db.policies, {
  through: db.userAssignPolicy,
});

// =================================== Policies Relation End ===========================================

// =================================== Country Relation Start ===========================================

db.countries.hasMany(db.states);
db.states.belongsTo(db.countries);

db.countries.hasMany(db.cities);
db.cities.belongsTo(db.countries);

db.countries.hasMany(db.superAreas);
db.superAreas.belongsTo(db.countries);

db.countries.hasMany(db.areas);
db.areas.belongsTo(db.countries);

db.countries.hasMany(db.subAreas);
db.subAreas.belongsTo(db.countries);

// =================================== Country Relation End ===========================================

// =================================== State Relation Start ===========================================

db.states.hasMany(db.cities);
db.cities.belongsTo(db.states);

db.states.hasMany(db.superAreas);
db.superAreas.belongsTo(db.states);

db.states.hasMany(db.areas);
db.areas.belongsTo(db.states);

db.states.hasMany(db.subAreas);
db.subAreas.belongsTo(db.states);

// =================================== State Relation End ===========================================

// =================================== City Relation Start ===========================================

db.cities.hasMany(db.areas);
db.areas.belongsTo(db.cities);

db.cities.hasMany(db.superAreas);
db.superAreas.belongsTo(db.cities);

db.cities.hasMany(db.subAreas);
db.subAreas.belongsTo(db.cities);

db.cities.hasOne(db.userBioData);
db.userBioData.belongsTo(db.cities);

// =================================== City Relation End ===========================================

// =================================== SuperArea Relation Start ===========================================

db.superAreas.hasMany(db.areas);
db.areas.belongsTo(db.superAreas);

db.superAreas.hasMany(db.subAreas);
db.subAreas.belongsTo(db.superAreas);

// =================================== SuperArea Relation End ===========================================

// =================================== Area Relation Start ===========================================

db.areas.hasMany(db.subAreas);
db.subAreas.belongsTo(db.areas);

// =================================== Area Relation End ===========================================

// =================================== SubArea Relation Start ===========================================

db.subAreas.hasMany(db.projectRegions);
db.projectRegions.belongsTo(db.subAreas);

db.subAreas.hasMany(db.user_region);
db.user_region.belongsTo(db.subAreas);

// =================================== SubArea Relation End =====================================================
// =================================== RegionsGrouping Relation Start ===========================================

db.regionsGrouping.hasOne(db.projects);
db.projects.belongsTo(db.regionsGrouping);

db.regionsGrouping.hasMany(db.countries);
db.countries.belongsTo(db.regionsGrouping);

db.regionsGrouping.hasMany(db.states);
db.states.belongsTo(db.regionsGrouping);

db.regionsGrouping.hasMany(db.cities);
db.cities.belongsTo(db.regionsGrouping);

db.regionsGrouping.hasMany(db.superAreas);
db.superAreas.belongsTo(db.regionsGrouping);

db.regionsGrouping.hasMany(db.areas);
db.areas.belongsTo(db.regionsGrouping);

db.regionsGrouping.hasMany(db.subAreas);
db.subAreas.belongsTo(db.regionsGrouping);

// =================================== RegionsGrouping Relation End =============================================

// =================================== Section Relation Start ===================================================

db.sections.hasOne(db.questionnaires);
db.questionnaires.belongsTo(db.sections);

db.questionnaires.hasMany(db.questionnaire_log);
db.questionnaire_log.belongsTo(db.questionnaires);

db.sections.hasMany(db.questionnaire_log);
db.questionnaire_log.belongsTo(db.sections);

db.sections.hasMany(db.cleanings);
db.cleanings.belongsTo(db.sections);

// =================================== Section Relation End ===========================================

// =================================== QA Relation Start ===========================================

db.QA_RetailAudit_Log.hasMany(db.RetailAudit_Shop_QA_Result, {
  foreignKey: "QAResultId",
});
db.RetailAudit_Shop_QA_Result.belongsTo(db.QA_RetailAudit_Log, {
  foreignKey: "QAResultId",
});

// =================================== QA Relation End =============================================

db.field_user_request.hasOne(db.userBioData);
db.userBioData.belongsTo(db.field_user_request);

db.categories.hasMany(db.subCategories);
db.subCategories.belongsTo(db.categories);

db.subCategories.hasMany(db.brand);
db.brand.belongsTo(db.subCategories);

db.brand.hasMany(db.variant);
db.variant.belongsTo(db.brand);

db.variant.hasMany(db.size);
db.size.belongsTo(db.variant);

db.variant.hasMany(db.size);
db.size.belongsTo(db.variant);

db.size.hasMany(db.packType);
db.packType.belongsTo(db.size);

db.packType.hasMany(db.companyRetail);
db.companyRetail.belongsTo(db.packType);

db.companyRetail.hasMany(db.origin);
db.origin.belongsTo(db.companyRetail);

db.origin.hasMany(db.sku);
db.sku.belongsTo(db.origin, { as: "originnId", foreignKey: "originId" });

db.batch.hasMany(db.batchDetails);
db.batchDetails.belongsTo(db.batch);

db.projects.hasMany(db.highlightedCategories);
db.highlightedCategories.belongsTo(db.projects);

db.sections.hasMany(db.highlightedCategories);
db.highlightedCategories.belongsTo(db.sections);

db.questionnaires.hasMany(db.highlightedCategories);
db.highlightedCategories.belongsTo(db.questionnaires);

//============================ RCube Relation ====================================

db.RetailAudit_Response.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.RetailAudit_Response);
// //-----------------------------------------------------------------------------------
db.RetailAudit_Response.hasMany(db.Shop_Images);
db.Shop_Images.belongsTo(db.RetailAudit_Response);
// //-----------------------------------------------------------------------------------
db.RetailAudit_Response.hasMany(db.Category_Images);
db.Category_Images.belongsTo(db.RetailAudit_Response);
// //-----------------------------------------------------------------------------------
db.RetailAudit_Response.hasMany(db.RetailAudit_Response_Version);
db.RetailAudit_Response_Version.belongsTo(db.RetailAudit_Response);
// //-----------------------------------------------------------------------------------
db.RetailAudit_Response.hasMany(db.RetailAudit_Response_Edit);
db.RetailAudit_Response_Edit.belongsTo(db.RetailAudit_Response);

//========== Retail Audit Response Relations End ================================

//========== Daily Retail Audit Response Relations Start ================================

db.Daily_RetailAudit_Response.hasMany(db.RetailAudit_Stock, {
  foreignKey: "dailyRecordId",
});
db.RetailAudit_Stock.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});
// //-----------------------------------------------------------------------------------
db.Daily_RetailAudit_Response.hasMany(db.response_POSM, {
  foreignKey: "dailyRecordId",
});
db.response_POSM.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});
// //-----------------------------------------------------------------------------------
db.Daily_RetailAudit_Response.hasMany(db.response_SourceOfPurchase, {
  foreignKey: "dailyRecordId",
});
db.response_SourceOfPurchase.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});
// //-----------------------------------------------------------------------------------
db.Daily_RetailAudit_Response.hasMany(db.shopInvoices, {
  foreignKey: "dailyRecordId",
});
db.shopInvoices.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});
// //-----------------------------------------------------------------------------------
db.Daily_RetailAudit_Response.hasMany(db.market_Intelligence_Images, {
  foreignKey: "dailyRecordId",
});
db.market_Intelligence_Images.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});
// //-----------------------------------------------------------------------------------
db.Daily_RetailAudit_Response.hasMany(db.Retial_Audit_Audios, {
  foreignKey: "dailyRecordId",
});
db.Retial_Audit_Audios.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});
// //-----------------------------------------------------------------------------------
db.Daily_RetailAudit_Response.hasMany(db.QA_RetailAudit_Log, {
  foreignKey: "dailyRecordId",
});
db.QA_RetailAudit_Log.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});

//-----------------------------------------------------------------------------------
db.Daily_RetailAudit_Response.hasMany(db.Reconcile_Retail_Audit_Stock, {
  foreignKey: "dailyRecordId",
});
db.Reconcile_Retail_Audit_Stock.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});

//========== Daily Retail Audit Response Relations End ================================

//============== Retail Audit Unbranded Stock ==============================

db.Daily_RetailAudit_Response.hasMany(db.retailAudit_UnbrandedStock, {
  foreignKey: "dailyRecordId",
});
db.retailAudit_UnbrandedStock.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});

db.users.hasMany(db.retailAudit_UnbrandedStock);
db.retailAudit_UnbrandedStock.belongsTo(db.users);

//============== Retail Audit Unbranded Stock ==============================

//========== Retail Audit Stock Relations Starts ================================

db.RetailAudit_Stock.hasMany(db.Sku_Images);
db.Sku_Images.belongsTo(db.RetailAudit_Stock);

//========== Retail Audit Stock Relations End ================================
//========== Reconcile Retail Audit Stock Relations Starts ================================

db.Reconcile_Sku.hasMany(db.Reconcile_Retail_Audit_Stock, {
  foreignKey: "skuId",
});
db.Reconcile_Retail_Audit_Stock.belongsTo(db.Reconcile_Sku, {
  foreignKey: "skuId",
});

db.RetailAudit_Stock.hasMany(db.retailAudit_ReconcileHistory);
db.retailAudit_ReconcileHistory.belongsTo(db.RetailAudit_Stock);

db.retailAudit_ReconcileHistory.hasMany(db.retailAudit_ReconcileHistorySKU);
db.retailAudit_ReconcileHistorySKU.belongsTo(db.retailAudit_ReconcileHistory);

db.Reconcile_Sku.hasMany(db.retailAudit_ReconcileHistorySKU);
db.retailAudit_ReconcileHistorySKU.belongsTo(db.Reconcile_Sku);

db.users.hasMany(db.retailAudit_ReconcileHistory);
db.retailAudit_ReconcileHistory.belongsTo(db.users, {
  foreignKey: "reconcileBy",
});

db.users.hasMany(db.retailAudit_ReconcileHistorySKU);
db.retailAudit_ReconcileHistorySKU.belongsTo(db.users, {
  foreignKey: "reconcileBy",
});

db.projects.hasMany(db.retailAudit_ReconcileHistory);
db.retailAudit_ReconcileHistory.belongsTo(db.projects);

db.projects.hasMany(db.retailAudit_ReconcileHistorySKU);
db.retailAudit_ReconcileHistorySKU.belongsTo(db.projects);

db.RetailAudit_Stock.hasMany(db.Reconcile_Sku);
db.Reconcile_Sku.belongsTo(db.RetailAudit_Stock);

db.projects.hasMany(db.Reconcile_Sku);
db.Reconcile_Sku.belongsTo(db.projects);

// users.hasMany(db.retailAudit_ReconcileHistory);
// retailAudit_ReconcileHistory.belongsTo(db.users, { foreignKey: "createdBy" });

// users.hasMany(db.retailAudit_ReconcileHistorySKU);
// retailAudit_ReconcileHistorySKU.belongsTo(db.users, {
//   foreignKey: "createdBy",
// });

//========== Reconcile Retail Audit Stock Relations End ================================
//========== Retail Audit Response Edit Logs Relations Starts ================================

db.users.hasMany(db.RetailAudit_Response_Edit, { foreignKey: "editedBy" });
db.RetailAudit_Response_Edit.belongsTo(db.users, { foreignKey: "editedBy" });

db.users.hasMany(db.RetailAudit_Response_Edit, {
  as: "interviewer",
  foreignKey: "userId",
});
db.RetailAudit_Response_Edit.belongsTo(db.users, {
  as: "interviewer",
  foreignKey: "userId",
});

//========== Retail Audit Response Edit Logs Relations End ================================

db.projects.hasMany(db.shopInvoices);
db.shopInvoices.belongsTo(db.projects);

db.users.hasMany(db.shopInvoices);
db.shopInvoices.belongsTo(db.users);

//----------------------------------------------------------------------------------------

db.users.hasMany(db.RetailAudit_Stock);
db.RetailAudit_Stock.belongsTo(db.users);

db.countries.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.countries);

db.states.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.states);

db.cities.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.cities);

db.users.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.users);

db.users.hasMany(db.RetailAudit_Response);
db.RetailAudit_Response.belongsTo(db.users);

db.areas.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.areas);

db.superAreas.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.superAreas);

db.subAreas.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.subAreas);

db.projects.hasMany(db.Reconcile_Retail_Audit_Stock);
db.Reconcile_Retail_Audit_Stock.belongsTo(db.projects);

//----------------------------------------------------------------------------------------

db.projects.hasMany(db.response_POSM);
db.response_POSM.belongsTo(db.projects);

db.users.hasMany(db.response_POSM);
db.response_POSM.belongsTo(db.users);

db.projects.hasMany(db.response_SourceOfPurchase);
db.response_SourceOfPurchase.belongsTo(db.projects);

db.users.hasMany(db.response_SourceOfPurchase);
db.response_SourceOfPurchase.belongsTo(db.users);

db.subAreas.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.subAreas);

db.cities.hasMany(db.Daily_RetailAudit_Response);
db.Daily_RetailAudit_Response.belongsTo(db.cities);

//==================================== DGM Relations ===========================
db.projects.hasOne(db.dgm_user_reach);
db.dgm_user_reach.belongsTo(db.projects);

db.dgm_responses.hasOne(db.dgm_responses_status);
db.dgm_responses_status.belongsTo(db.dgm_responses);

//==================================== Simple Survey Relations ===========================
// db.users.hasMany(db.simpleSurvey_responses);
// db.simpleSurvey_responses.belongsTo(db.users);
//==================================== retailaudit_fastselling_sku Relation Start ===========================

db.Daily_RetailAudit_Response.hasMany(db.retailAudit_fastselling_sku, {
  foreignKey: "dailyRecordId",
});
db.retailAudit_fastselling_sku.belongsTo(db.Daily_RetailAudit_Response, {
  foreignKey: "dailyRecordId",
});

db.users.hasMany(db.retailAudit_fastselling_sku);
db.retailAudit_fastselling_sku.belongsTo(db.users);

db.users.hasMany(db.retailAudit_fastselling_sku);
db.retailAudit_fastselling_sku.belongsTo(db.users);

db.projects.hasMany(db.retailAudit_fastselling_sku);
db.retailAudit_fastselling_sku.belongsTo(db.projects);

db.projects.hasMany(db.QA_RetailAudit_Log);
db.QA_RetailAudit_Log.belongsTo(db.projects);

//==================================== retailaudit_fastselling_sku Relation end ===========================

//==================================== retailaudit_frequency_of_purchase Relation Start ===========================

// db.Daily_RetailAudit_Response.hasMany(db.retailaudit_frequency_of_purchase, {
//   foreignKey: "dailyRecordId",
// });
// db.retailaudit_frequency_of_purchase.belongsTo(db.Daily_RetailAudit_Response, {
//   foreignKey: "dailyRecordId",
// });

// db.users.hasMany(db.retailaudit_frequency_of_purchase);
// db.retailaudit_frequency_of_purchase.belongsTo(db.users);

// db.users.hasMany(db.retailaudit_frequency_of_purchase);
// db.retailaudit_frequency_of_purchase.belongsTo(db.users);

// db.projects.hasMany(db.retailaudit_frequency_of_purchase);
// db.retailaudit_frequency_of_purchase.belongsTo(db.projects);

//==================================== retailaudit_frequency_of_purchase Relation end ===========================

//==================================== Simple Survey Relation Start ===========================
//simple survey Responses has many images
db.simpleSurvey_responses.hasMany(db.simpleSurveyImages);
db.simpleSurveyImages.belongsTo(db.simpleSurvey_responses);

//simple survey responses has many audios
db.simpleSurvey_responses.hasMany(db.simpleSurveyAudios);
db.simpleSurveyAudios.belongsTo(db.simpleSurvey_responses);

db.users.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.users);

db.users.hasMany(db.batch, { foreignKey: "interviewerId" });
db.batch.belongsTo(db.users, { foreignKey: "interviewerId" });

db.simpleSurvey_responses.hasMany(db.simpleSurvey_QALogs);
db.simpleSurvey_QALogs.belongsTo(db.simpleSurvey_responses);

db.simpleSurvey_QALogs.hasMany(db.simpleSurvey_shopQAResults);
db.simpleSurvey_shopQAResults.belongsTo(db.simpleSurvey_QALogs);

db.projects.hasMany(db.simpleSurvey_QALogs);
db.simpleSurvey_QALogs.belongsTo(db.projects);

db.projects.hasMany(db.simpleSurvey_shopQAResults);
db.simpleSurvey_shopQAResults.belongsTo(db.projects);

db.users.hasMany(db.simpleSurvey_QALogs);
db.simpleSurvey_QALogs.belongsTo(db.users, {
  as: "respondant",
  foreignKey: "respondantId",
});

db.users.hasMany(db.simpleSurvey_QALogs);
db.simpleSurvey_QALogs.belongsTo(db.users, {
  as: "QABy",
  foreignKey: "QAedBy",
});

db.simpleSurvey_responses.hasMany(db.batchDetails);
db.batchDetails.belongsTo(db.simpleSurvey_responses);

db.countries.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.countries);

db.states.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.states);

db.cities.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.cities);

db.users.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.users);

db.areas.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.areas);

db.superAreas.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.superAreas);

db.subAreas.hasMany(db.simpleSurvey_responses);
db.simpleSurvey_responses.belongsTo(db.subAreas);

//========== Simple Survey Response Edit Logs Relations Starts ================================

db.simpleSurvey_responses.hasMany(db.simpleSurveyResponses_EditLogs);
db.simpleSurveyResponses_EditLogs.belongsTo(db.simpleSurvey_responses);

db.users.hasMany(db.simpleSurveyResponses_EditLogs, { foreignKey: "editedBy" });
db.simpleSurveyResponses_EditLogs.belongsTo(db.users, {
  foreignKey: "editedBy",
});

db.users.hasMany(db.simpleSurveyResponses_EditLogs, {
  as: "interviewer_simpleSurvey",
  foreignKey: "userId",
});
db.simpleSurveyResponses_EditLogs.belongsTo(db.users, {
  as: "interviewer_simpleSurvey",
  foreignKey: "userId",
});

//========== Simple Survey Response Edit Logs Relations End ================================

//==================================== Simple Survey Relation End ===========================

//=====================Client Application Relation Start ==================

db.projectTypes.hasMany(db.clientApplication);
db.clientApplication.belongsTo(db.projectTypes);

db.studyType.hasMany(db.clientApplication, {
  as: "clientApplication",
  foreignKey: "studyTypeId",
});
db.clientApplication.belongsTo(db.studyType, {
  as: "clientApplication",
  foreignKey: "studyTypeId",
});

db.clientApplication.hasMany(db.clientApplicationVersion);
db.clientApplicationVersion.belongsTo(db.clientApplication);

db.users.hasMany(db.userTrackRecord);
db.userTrackRecord.belongsTo(db.users);

db.projects.hasMany(db.projectWaveSettings);
db.projectWaveSettings.belongsTo(db.projects);

db.projects.hasMany(db.projectClassificationOneOffSetting);
db.projectClassificationOneOffSetting.belongsTo(db.projects);

db.waveType.hasMany(db.projectWaveSettings);
db.projectWaveSettings.belongsTo(db.waveType);

db.projectClassificationType.hasMany(db.projects);
db.projects.belongsTo(db.projectClassificationType);

db.projects.hasMany(db.projectQuotaManagement);
db.projectQuotaManagement.belongsTo(db.projects);

db.system_page.belongsToMany(db.roles, {
  through: "systemModules_systemPages_roles",
});
db.roles.belongsToMany(db.system_page, {
  through: "systemModules_systemPages_roles",
});

//
db.roleGroup.hasMany(db.users);
db.users.belongsTo(db.roleGroup);
//
db.roleGroup.hasMany(db.roles);
db.roles.belongsTo(db.roleGroup);

db.sku.hasMany(db.Reconcile_Sku);
db.Reconcile_Sku.belongsTo(db.sku);

db.users.hasMany(db.Reconcile_Sku);
db.Reconcile_Sku.belongsTo(db.users);

db.projects.hasMany(db.diagnostic);
db.diagnostic.belongsTo(db.projects);

//project has one region level mangement
db.projects.hasOne(db.regionLevelManagement);
db.regionLevelManagement.belongsTo(db.projects);

//region Groping has many region level mangement
db.regionsGrouping.hasMany(db.regionLevelManagement);
db.regionLevelManagement.belongsTo(db.regionsGrouping);

//project has one fixed quota
db.projects.hasMany(db.fixedQuota);
db.fixedQuota.belongsTo(db.projects);

//project has many fixed projectQuotaData
db.projects.hasMany(db.projectQuotaData);
db.projectQuotaData.belongsTo(db.projects);

//region Groping has many region Label
db.regionsGrouping.hasMany(db.regionLabel);
db.regionLabel.belongsTo(db.regionsGrouping);

//region labels relationships

db.regionLabel.hasMany(db.countries);
db.countries.belongsTo(db.regionLabel);

db.regionLabel.hasMany(db.states);
db.states.belongsTo(db.regionLabel);

db.regionLabel.hasMany(db.cities);
db.cities.belongsTo(db.regionLabel);

db.regionLabel.hasMany(db.superAreas);
db.superAreas.belongsTo(db.regionLabel);

db.regionLabel.hasMany(db.areas);
db.areas.belongsTo(db.regionLabel);

db.regionLabel.hasMany(db.subAreas);
db.subAreas.belongsTo(db.regionLabel);

module.exports = db;
