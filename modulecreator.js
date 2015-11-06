/**
 *
 *  This script creates node modules to be installed directly into your project
 *
 *  v 0.0.1
 *
 */

/*
  Dependencies
 */
var fs = require('fs');

console.log("Creator Started");

/*
  Processing user input
 */
if (process.argv[2]) {

  var moduleName = process.argv[2];
  var NAME_CAP = moduleName.toUpperCase();
  var NAME_LOW = moduleName.toLowerCase();
  console.log('This is module name: ' + moduleName);

} else {
  console.log('Please check that you have entered the right arguments');
  return;
}

if (!fs.existsSync('modules')) {
  console.log('Please check that modules folder exists and try again');
  return;
}



console.log("Creator Done");





