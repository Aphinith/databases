var db = require('../db');




module.exports = {
  messages: {
    get:  // a function which produces all the messages
        function (req, res) {
      con.query("SELECT * from messages;", function(err, rows){
        if(err){
          console.log("You got a problem", err);
        }
        console.log("These are rows: ",rows);
        res.send('Finished query!');
      });
  },
    post:  // a function which can be used to insert a message into the database
    function (req, res) {
      console.log("This is response",res);
      console.log("This is request", req);
    }
  },

  users: {
    // Ditto as above.
    get: "SELECT * FROM user",
    post: "INSERT INTO user(name) VALUES (?);"
  }
};

