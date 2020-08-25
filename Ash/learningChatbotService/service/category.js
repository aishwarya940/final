var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser
var jsonParser = bodyParser.json();

// include CategoryModel model class
CategoryModel = require('../model/category');

// include property manager class
propertyManager = require('../utils/propertyManager');

var category = { 
  find: function(req, res, next) { 
      console.log('category called...');
      if (!req.body) {
        res.setHeader('Content-Type', 'application/json');
        return res.sendStatus(400);
      } else {
        console.log('category called else...' + req.body.subject);
        return CategoryModel.getCategory(req, res);
      }
    }
}


module.exports = category;