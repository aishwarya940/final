var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser
var jsonParser = bodyParser.json();

// include SubjectModel model class
SubjectModel = require('../model/subjects');

// include property manager class
propertyManager = require('../utils/propertyManager');

var subjects = { 
  find: function(req, res, next) { 
      console.log('subjects called...');
      if (!req.body) {
        res.setHeader('Content-Type', 'application/json');
        return res.sendStatus(400);
      } else {
        console.log('subjects called else...' + req.body.phone);
        return SubjectModel.getSubjects(req, res);
      }
    }
}


module.exports = subjects;