var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser
var jsonParser = bodyParser.json();

// include Login model class
LoginModel = require('../model/login');

// include property manager class
propertyManager = require('../utils/propertyManager');

var login = { 
  find: function(req, res, next) { 
      console.log('login called...');
      if (!req.body) {
        res.setHeader('Content-Type', 'application/json');
        return res.sendStatus(400);
      } else {
        console.log('login called else...' + req.body.phone);
        return LoginModel.getLogin(req, res);
      }
    }
}


module.exports = login;
