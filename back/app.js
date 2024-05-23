const express = require('express');
const bodyParse = require('body-parser')
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require('./routes');

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://climappmdh.vercel.app/');
    res.header('Access-Control-Allow-Headers', 'Content-Type'); 
    res.header('Access-Control-Allow-Credentials', true); 
    next();
});

app.use(cors());
app.use(routes);


app.listen(3001, () => {
    console.log('Servidor iniciado en el puerto 3001');
});
