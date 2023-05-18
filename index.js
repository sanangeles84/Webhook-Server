const express = require('express')
const app = express();
const bodyParser = require("body-parser");
//require('dotenv').config();
var port = process.env.PORT || 3000;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});

