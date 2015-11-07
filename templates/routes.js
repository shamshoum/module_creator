exports.routesTemplate = function () {
  var templateStr = "\n" +
  "\n" +
  "/* Dependencies */ \n" +
  "var express = require('express'); \n" +
  "var router = express.Router(); \n" +
  "\n" +
  "/* %cap% routes */ \n" +
  "router.get('/%small%', %small%.getAll%cap%s); \n" +
  "router.get('/%small%/:id', %small%.getUSerById); \n" +
  "router.post('/%small%', %small%.create%cap%); \n" +
  "router.put('/%small%/:id', %small%.update%cap%); \n" +
  "router.delete('/%small%/:id', %small%.delet%cap%); \n" +
  "\n" +
  "module.exports = router; \n" +
  "\n";
  return templateStr;
};


