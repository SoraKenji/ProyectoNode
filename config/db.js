

module.exports = function () {
    var con = require('mysql').createConnection({
        host: "localhost",    // ip address of server running mysql
        user: "satodb",    // user name to your mysql database
        password: "teamoruben",    // corresponding password
    });

    return con;
  }