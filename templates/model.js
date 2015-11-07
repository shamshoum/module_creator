exports.modelTemplate = function () {
  var templateStr = "\n" +
  "/* \n" +
   "This is the %cap% schema \n" +
   "*/ \n" +
"\n" +
  "/* Dependencies */ \n" +
  "var mongoose = require('mongoose'); \n" +
  "var Schema=mongoose.Schema; \n" +
"\n" +
  "/* Schema */ \n" +
  "var %small%Schema = new Schema({ \n" +
"\n" +
    "name: String, \n" +
"\n" +
    "description: String, \n" +
"\n" +
"    createdDate: { \n" +
"      type: Date, \n" +
      "default: Date.now \n" +
    "}, \n" +
"\n" +
  "}); \n" +
"\n" +
  "module.exports = mongoose.model('%cap%', %small%Schema, '%cap%'); \n";

  return templateStr;
};

