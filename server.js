const express        = require('express');

const bodyParser     = require('body-parser');
const app            = express();

const port = 1102;

///


 
// create a connection variable with the details required
con = require('./config/db')
 
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


