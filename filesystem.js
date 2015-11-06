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
var fs = require('fs');

exports.checkDir = function(path, errMsg) {
  if (!fs.existsSync(path)) {
    console.log(errMsg);
    return;
  }
};