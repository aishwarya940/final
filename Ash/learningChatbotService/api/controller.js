'use strict';
var properties = require('../package.json')
var user = require('../service/user');
var login = require('../service/login');
var signup = require('../service/signup');
var category = require('../service/category');
var subjects = require('../service/subjects');
var topics = require('../service/topics');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
    getName: function(req, res) {
        user.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    login: function(req, res) {
        login.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    signup: function(req, res) {
        signup.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    getSubjects: function(req, res) {
        subjects.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    getCategory: function(req, res) {
        category.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    getTopics: function(req, res) {
        topics.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    },
    getTopicsDetails: function(req, res) {
        topics.find(req, res, function(err, dist) {
            if (err)
                res.send(err);
            res.json(dist);
        });
    }
};

module.exports = controllers;