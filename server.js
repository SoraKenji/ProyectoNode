const express        = require('express');

const bodyParser     = require('body-parser');
const app            = express();

const port = 1102;

///

// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the details required
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "satodb",    // user name to your mysql database
  password: "teamoruben",    // corresponding password
});
 
app.use(bodyParser.urlencoded({ extended: true }));
// connect to the database.
con.connect(function(err) {
    if (err) throw err;
    require('./app/routes')(app, {});
    app.listen(port, ()=> {
        console.log('Corriendo en el puerto ' + port);
        console.log("Connected!");
    });
});

///


