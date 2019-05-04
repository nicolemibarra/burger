//Import 
var orm = require('../config/orm.js');

//Call Back
var burger = 
{

  selectAll: function(callback)
  {
    orm.selectAll(function(res)
    {
      callback(res);
    });
  },

  //Insert
  insertOne: function(burger_name, callback)
  {
    orm.insertOne(burger_name, function(res)
    {
      callback(res);
    });
  },

  //Update
  updateOne: function(burger_id, callback)
  {
    orm.updateOne(burger_id, function(res)
    {
      callback(res);
    });
  }

};

//Export 
module.exports = burger;
