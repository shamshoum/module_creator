/**
 * This is the templates manager, which is responsible for returning templates after parsing
 */


var controllersTemplate = require('./templates/controllers');
var modelTemplate = require('./templates/model');
var routesTemplate = require('./templates/routes');

/**
 * This is the function that returns the controllers template
 *
 * @param low
 * @param cap
 * @returns {*}
 */
exports.getControllersTemplate = function(low, cap) {
  var templateStr = controllersTemplate.controllerTemplate();
  console.log('This is the template :::::::::::: '.blue);
  templateStr = templateStr.replace(/%small%/g, low);
  templateStr = templateStr.replace(/%cap%/g, cap);
  return templateStr;
};

/**
 * This is the function that returns the model template
 *
 * @param low
 * @param cap
 * @returns {*}
 */
exports.getModelTemplate = function(low, cap) {
  var templateStr = modelTemplate.modelTemplate();
  templateStr = templateStr.replace(/%small%/g, low);
  templateStr = templateStr.replace(/%cap%/g, cap);
  return templateStr;
};

/**
 * This is the function that returns the routes template
 *
 * @param low
 * @param cap
 * @returns {*}
 */
exports.getRoutesTemplate = function(low, cap) {
  var templateStr = routesTemplate.routesTemplate();
  templateStr = templateStr.replace(/%small%/g, low);
  templateStr = templateStr.replace(/%cap%/g, cap);
  return templateStr;
};