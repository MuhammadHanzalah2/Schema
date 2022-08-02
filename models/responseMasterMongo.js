const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResponseMasterSchema = new Schema(
  {
    metaKey: {
      type: Object,
    },
    //   text: {
    //     type: String,
    //   },
    //   value: {
    //     type: String,
    //   },
    //   projectId: {
    //     type: Number,
    //   },
    //   userId: {
    //     type: Number,
    //   },
    //   sectionId: {
    //     type: Number,
    //   },
    //   answerJSON: {
    //     type: Array,
    //   },
    //   answerResult: {
    //     type: Array,
    //   },
    //   dataKey: {
    //     type: Object,
    //   },
    //   lat: {
    //     type: Decimal128,
    //   },
    //   lng: {
    //     type: Decimal128,
    //   },
    //   startTime: {
    //     type: Date,
    //   },
    //   endTime: {
    //     type: Date,
    //   },
    //   createdAt: { type: Date, default: Date.now },
  },
  { strict: false }
);
const ResponseMasterModel = mongoose.model(
  "retailAuditResponses",
  ResponseMasterSchema
);
module.exports = ResponseMasterModel;
