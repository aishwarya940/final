var mongoose = require('mongoose');

//Schema for subjects

var subjectSchema = mongoose.Schema({
    subject: {
        type: String,
        required: false
    }
});

var SubjectModel = module.exports = mongoose.model('subjects', subjectSchema);

// Subjects
module.exports.getSubjects = function (req, res) {
    console.log('Subjects Model called.....');
    SubjectModel.find(function (err, subjectDetails) {
        //Got the result, saved a few bytes of code
        if (subjectDetails) {
            console.log('Record found.....' + subjectDetails);
            res.json(subjectDetails);
        } else {
            console.log('Record not found.....' + subjectDetails);
            res.json(subjectDetails);
        }
    });
}