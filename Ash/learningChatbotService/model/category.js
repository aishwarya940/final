var mongoose = require('mongoose');

//Schema for Category

var categorySchema = mongoose.Schema({
    subject: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
});

var CategoryModel = module.exports = mongoose.model('categories', categorySchema);

// CategoryModel
module.exports.getCategory = function (req, res) {
    console.log('Category Model called.....' + req.body.subject);
    var data = '';
    data = {
        subject: req.body.subject
    };    

    CategoryModel.find(data, function (err, categoryDetail) {
        //Got the result, saved a few bytes of code
        console.log(data);
        if (categoryDetail) {
            console.log('Record found.....' + categoryDetail);
            res.json(categoryDetail);
        } else {
            console.log('Record not found.....' + categoryDetail);
            res.json(err);
        }
    });
}
