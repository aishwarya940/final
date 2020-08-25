'use strict';

const controller = require('./controller');
const request = require('request');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/userName')
       .get(controller.getName);
   app.route('/login')
       .post(controller.login);
   app.route('/signup')
       .post(controller.signup);
   app.route('/getSubjects')
       .get(controller.getSubjects);
   app.route('/getCategory')
       .get(controller.getCategory);
   app.route('/getTopics')
       .get(controller.getTopics);
   app.route('/getTopicsDetails')
       .get(controller.getTopicsDetails);
};