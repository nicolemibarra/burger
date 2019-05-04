//Require
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Routes
router.get('/', function (req, res) 
{
  res.redirect('/index');
});
 
router.get('/index', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = { burgers: data };
    
    res.render('index', hbsObject);
  });
});

//Custom Burger
router.post('/burger/create', function (req, res) 
{
  burger.insertOne(req.body.burger_name, function() 
  {
    res.redirect('/index');
  });
});

//Devour 
router.post('/burger/eat/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

//Export
module.exports = router;

