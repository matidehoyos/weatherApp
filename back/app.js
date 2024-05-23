const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require('./routes');


app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type'); 
    res.header('Access-Control-Allow-Credentials', true); 
    next();
});

app.use('/', routes);


app.listen(3001, () => {
    console.log('Servidor iniciado en el puerto 3001');
});
