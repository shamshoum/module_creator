/**
 *
 *  This script is responsible for all filesystem functions
 *
 *  v 0.0.1
 *
 */

/*
 Dependencies
 */
var fs = require('fs'),
  color = require('colors');

/**
 * This function checks if a directory exists
 *
 * @param path
 * @param errMsg
 * @returns {boolean}
 */
exports.checkDir = function(path, errMsg) {
  if (!fs.existsSync(path)) {
    console.log(errMsg.red);
    return false;
  } else {
    return true;
  }
};

/**
 * The function creates a directory
 * @param dir
 */
exports.createDir = function(dir) {
  fs.mkdirSync(dir);
};