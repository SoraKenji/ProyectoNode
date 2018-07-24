
// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the details required
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "satodb",    // user name to your mysql database
  password: "teamoruben",    // corresponding password
});

module.exports = con;