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

exports.checkDir = function(path, errMsg) {
  if (!fs.existsSync(path)) {
    console.log(errMsg.red);
    return false;
  } else {
    return true;
  }
};