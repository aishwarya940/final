var request = require('request');

var user = {
    find: function(req, res, next) {
        res.send("Vibhor"); 
    }
 };


module.exports = user;