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
var fileSystem = require('./filesystem');
var fs = require('fs');
var templates = require('./templatemanager');

console.log("Creator Started".green);

/*
  Processing user input
 */
if (process.argv[2] && process.argv[3]) {

  var DIR_PATH = process.argv[2];

  // Checking destination directory
  if(!fileSystem.checkDir(DIR_PATH, 'Please check destination path')){
    return;
  }

  // Initializing project name
  var moduleName = process.argv[3];
  var NAME_LOW = moduleName.toLowerCase();
  var NAME_CAP = NAME_LOW[0].toUpperCase() + NAME_LOW.slice(1);
  var MOD_PATH = DIR_PATH + 'modules/' + NAME_LOW;
  console.log('This is module name: ' + moduleName);

} else {

  console.log('Please check that you have entered the right arguments');
  return;

}

if(!fileSystem.checkDir(DIR_PATH + 'modules', 'Please check that the destination folder consists of node app and try again')){
  return;
}

// if(fs.existsSync(MOD_PATH)) {
//  console.log('Module already exists'.red);
//  return;
//} else {
  fs.mkdir(MOD_PATH, function(err){
    if(err) return console.log(err.red);
    console.log('directory created'.green);
    fs.writeFile(MOD_PATH + "/" + NAME_LOW + ".controllers.js", templates.getControllersTemplate(NAME_LOW, NAME_CAP), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    fs.writeFile(MOD_PATH + "/" + NAME_LOW + ".model.js", templates.getModelTemplate(NAME_LOW, NAME_CAP), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    fs.writeFile(MOD_PATH + "/" + NAME_LOW + ".routes.js", templates.getRoutesTemplate(NAME_LOW, NAME_CAP), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
//}





console.log("Creator Done".green);





