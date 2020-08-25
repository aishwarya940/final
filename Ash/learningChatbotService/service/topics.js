var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create application/json parser
var jsonParser = bodyParser.json();

// include TopicsModel model class
TopicsModel = require('../model/topics');

// include property manager class
propertyManager = require('../utils/propertyManager');

var topics = { 
  find: function(req, res, next) { 
      console.log('topics called...');
      if (!req.body) {
        res.setHeader('Content-Type', 'application/json');
        return res.sendStatus(400);
      } else {
        console.log('topics called else...' + req.body);
        return TopicsModel.getTopics(req, res);
      }
    }
}

var topics = { 
  find: function(req, res, next) { 
      console.log('getTopicsDetails called...');
      if (!req.body) {
        res.setHeader('Content-Type', 'application/json');
        return res.sendStatus(400);
      } else {
        console.log('getTopicsDetails called else...' + req.body);
        return TopicsModel.getTopicsDetails(req, res);
      }
    }
}


module.exports = topics;