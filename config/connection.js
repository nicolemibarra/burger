var express = require("express");
var app = express();
app.use(express.json());
var PORT = 8000;
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",
    port: 3306,
    user: "b5b149443c50e7",
    password: "64c3186b",
    database: "heroku_575e5ff7e5b39e9"
});
connection.connect(function(err) {
    if (err) throw err;
        console.log("Wha wha");
        return
    },
    console.log("Nom nom!" 
    + connection.threadId)
)