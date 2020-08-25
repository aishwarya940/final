var mongoose = require('mongoose');

//Schema for Topics deatils

var topicsSchema = mongoose.Schema({
    category: {
        type: String,
        required: false
    },
    topic: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    links: {
        type: String,
        required: false
    },
});

var TopicsModel = module.exports = mongoose.model('topics', topicsSchema);

// TopicsModel
module.exports.getTopics = function (req, res) {
    console.log('Category Model called.....' + req.body.category);
    var data = '';
    data = {
        category: req.body.category
    };    

    TopicsModel.find(data, function (err, usr) {
        //Got the result, saved a few bytes of code
        console.log(data);
        if (usr) {
            console.log('Record found.....' + usr);
            res.json(usr);
        } else {
            console.log('Record not found.....' + usr);
            res.json(err);
        }
    });
}


module.exports.getTopicsDetails = function (req, res) {
    console.log('Category Model called.....' + req.body.category);
    var data = '';
    data = {
        category: req.body.category,
        topic: req.body.topic
    };    

    TopicsModel.find(data, function (err, usr) {
        //Got the result, saved a few bytes of code
        console.log(data);
        if (usr) {
            console.log('Record found.....' + usr);
            res.json(usr);
        } else {
            console.log('Record not found.....' + usr);
            res.json(err);
        }
    });
}