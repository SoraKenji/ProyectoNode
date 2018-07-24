const express        = require('express');

const bodyParser     = require('body-parser');
const app            = express();

const port = 1102;

app.listen(port, ()=> {
    console.log('Corriendo en el puerto ' + port);
});