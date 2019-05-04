//Node
var express = require('express');
var bodyParser = require('body-parser');

//Port
var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});