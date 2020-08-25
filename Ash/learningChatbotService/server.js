const express = require('express')
const app = express();
var mongoose = require('mongoose');
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri =
  "mongodb+srv://Modern123:Modern123@cluster0.o214a.gcp.mongodb.net/learningChatbot?retryWrites=true&w=majority";

mongoose.connect(uri);

var database = mongoose.connection;

const port = process.env.PORT || 3000;


const routes = require('./api/routes');

routes(app);

app.listen(port, function() {
   console.log('Server started on port: ' + port);
});