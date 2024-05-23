const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routes = require('./routes'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));


app.use(cors());

app.use(routes);

app.listen(3001, () => {
    console.log('Servidor iniciado en el puerto 3001');
});
