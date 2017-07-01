// call the packages we need
var express  = require('express');          // call express
var app  = express();                       // define our app using express


var bodyParser = require('body-parser');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes

require('./api/routes/user-routes')(app);


var port = process.env.PORT || 8080;        // set our port
app.listen(port);
console.log('RESTful API server started on: ' + port);
