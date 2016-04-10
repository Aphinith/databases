var models = require('../models');
var bluebird = require('bluebird');
var con = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      con.query("SELECT * from messages;", function(err, rows){
        if(err){
          console.log("You got a problem", err);
        }
        console.log("These are rows: ",rows);
        res.send('Finished query!');
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("This is response",res);
      console.log("This is request", req);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};



