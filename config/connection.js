//Ports & Heroku
var PORT = 8000;
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",
    port: 3306,
    user: "b5b149443c50e7",
    password: "64c3186b",
    database: "heroku_575e5ff7e5b39e9"
});

//Connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id' + connection.threadId); 
});

//Export
module.exports = connection;
