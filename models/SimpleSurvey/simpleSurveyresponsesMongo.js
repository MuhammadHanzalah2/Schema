const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const simpleSurveyResponsesMongoSchema = new Schema(
  {
    metaKey: {
      type: Object,
    },
  },
  { strict: false }
);

const simpleSurveyResponsesModel = mongoose.model(
  "simpleSurveyResponses",
  simpleSurveyResponsesMongoSchema
);

module.exports = simpleSurveyResponsesModel;
