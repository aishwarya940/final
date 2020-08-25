var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser
var jsonParser = bodyParser.json();

// include Login model class
LoginModel = require('../model/login');
// include property manager class
propertyManager = require('../utils/propertyManager');

var signup = {
  find: function(req, res, next) {    
    console.log('signup called...');
    if (!req.body) {
      return res.sendStatus(400);
    } else {
      console.log('signup called...' + req.body.phone);
      return LoginModel.signup(req, res);
    }
  }
}

module.exports = signup;
