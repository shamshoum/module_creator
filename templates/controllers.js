exports.controllerTemplate = function () {
  var templateStr = "\n" +
  "/* \n" +
  "This is the file that holds all the %small%s controllers \n" +
  "*/ \n" +
  "\n" +
  "/* Dependencies */ \n"  +
  "var %cap% = require('../models/%small%'); \n" +
  "\n" +
  "/** \n" +
   "* Create new %cap% \n" +
   "*/ \n" +
  "exports.create%cap% = function (req, res) { \n" +
    "if(req.body) { \n" +
      "var %small% = new %cap%(req.body); \n" +
    "} else { \n" +
      "var %small% = new %cap%(req); \n" +
    "} \n" +
    "%small%.save(function (err) { \n" +
      "if (err) { \n" +
        "return res.send(err); \n" +
      "} \n" +
      "if(res) { \n" +
        "res.json({'success': true, '%small%': %small%}); \n" +
    "} else { \n" +
      "return %small%; \n" +
    "} \n" +
  "}); \n" +
"}; \n" +
"\n" +
"/** \n" +
 "* Getting all %cap%s \n" +
 "*/ \n" +
"exports.getAll%cap%s = function (req, res) { \n" +
  "%cap%.find({}).populate('link').exec( function (err, %small%s) { \n" +
    "if (err) { \n" +
      "return res.send('Not working'); \n" +
    "} \n" +
    "res.json(%small%s); \n" +
  "}) \n" +
"}; \n" +
"\n" +
"/** \n" +
 "* Getting %cap% by ID \n" +
 "*/ \n" +
"exports.get%cap%ById = function(req, res){ \n" +
  "%cap%.findOne({_id: req.params.id}, function(err, %small%){ \n" +
    "if (err) { \n" +
      "return res.send(err); \n" +
    "} \n" +
    "res.json(%small%); \n" +
  "}); \n" +
"}; \n" +
"\n" +
"/** \n" +
 "* Updating %cap% by ID \n" +
 "*/ \n" +
"exports.update%cap% = function (req, res) { \n" +
  "%cap%.findOne({_id: req.params.id}, function (err, %small%) { \n" +
    "if (err) { \n" +
      "return res.send(err); \n" +
    "} \n" +
"\n" +
    "for (prop in req.body) { \n" +
    "%small%[prop] = req.body[prop]; \n" +
    "} \n" +
"\n"+
  "%small%.save(function (err) { \n" +
      "if (err) { \n" +
        "return res.send(err); \n" +
      "} \n" +
      "res.send({'success': true, '%small%': %small%}); \n" +
  "}); \n" +
"\n" +
"}); \n" +
"}; \n" +
"\n" +
"/** \n" +
 "* Deleting %cap% by ID \n" +
 "*/ \n" +
"exports.delet%cap% = function(req, res){ \n" +
  "%cap%.remove({ \n" +
    "_id: req.body.id \n" +
  "}, function(err, %small%){ \n" +
    "if (err) { \n" +
      "return res.send(err); \n" +
    "} \n" +
    "res.json({success : true , message: 'Successfully deleted'}); \n" +
  "}); \n" +
"}; \n";






return templateStr;
};

