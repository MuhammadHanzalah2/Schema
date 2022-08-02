/*

Model For tProjects with seven fields 'projectName', 'description', 'type' and 'createdBy' startingDate, endingDate, sampleQuotaAllocation

*/

module.exports = (sequelize, DataType) => {
  const tProject = sequelize.define("projects", {
    projectName: {
      type: DataType.STRING,
      unique: true,
    },
    projectDescription: {
      type: DataType.STRING,
      //unique: true,
    },
    // projectType: {
    //   type: DataType.INTEGER,
    // },
    createdBy: {
      type: DataType.INTEGER,
    },
    startingDate: {
      type: DataType.DATE,
    },
    endingDate: {
      type: DataType.DATE,
    },
    sampleQuotaAllocation: {
      type: DataType.INTEGER,
    },
    //to be discard 18-4-22
    isPublish: {
      type: DataType.BOOLEAN,
    },
    projectCode: {
      type: DataType.STRING,
      notNull: false,
    },
    clientName: {
      type: DataType.STRING,
      notNull: false,
    },
    studyType: {
      type: DataType.STRING,
      notNull: false,
    },
    isContinous: {
      type: DataType.BOOLEAN,
    },
    region: {
      type: DataType.TEXT,
    },
    combinations: {
      type: DataType.JSON,
    },
    autoProductSelection: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },
    rotation: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },
    //to be discard 18-4-22
    QAParameters: {
      type: DataType.JSON,
      allowNull: false,
      defaultValue: [],
    },
    //to be discard 18-4-22
    QAThreshold: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    projectLogo: {
      type: DataType.STRING,
    },
    regionsGroupAssigmentDate: {
      type: DataType.DATE,
    },
    //to be discard 18-4-22
    projectQAPercentage: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    //to be discard 18-4-22
    batchPassingPercentage: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    //to be discard 18-4-22
    sampleGenerationPercentage: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    //to be discard 18-4-22
    isAutoSave: {
      type: DataType.BOOLEAN,
      defaultValue: 1,
    },
    projectCode: { type: DataType.UUID },
  });

  return tProject;
};
