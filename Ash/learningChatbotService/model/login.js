var mongoose = require('mongoose');

//Schema for login

var loginSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: false
    }
});

var LoginModel = module.exports = mongoose.model('users', loginSchema);

// Login
module.exports.getLogin = function (req, res) {
    console.log('Login Model called.....' + req.body.password);
    var data = '';
    data = {
            phone: req.body.phone,
            password: req.body.password
    };
    

    LoginModel.find(data, function (err, usr) {
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

// Signup
module.exports.signup = function (req, res) {
    console.log('Signup Model called.....');

    var data = new LoginModel({
        fullname: req.body.fullname,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
        phone: req.body.phone
    });

    console.log('Data :' + data);

    var success = {
        success: "0",
        message: "OK"
    }

    data.save(function (error) {
        if (error) {
            console.error(error);
            res.json(error);
        } else {
            res.json(success);
        }
    });
}

module.exports = LoginModel;
