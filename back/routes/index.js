const express = require('express');
const router = express.Router();
const getCurrentWeather = require('../controllers/getCurrentWeather');
const getExtendido = require('../controllers/getExtendido');



router.get('/:city', getCurrentWeather);
router.get('/extendido/:city', getExtendido);





module.exports = router;