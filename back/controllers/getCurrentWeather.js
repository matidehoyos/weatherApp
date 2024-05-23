const axios = require('axios');
require('dotenv').config();
const appId = process.env.APPID;

const getCurrentWeather = async (req, res) => {
    const city = req.params.city;    

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=ba7a2e613f6937a889d37f7512ca3971&units=metric`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error al obtener datos del clima:', error);
        res.status(500).json({ error: 'Error al obtener datos del clima' });
    }
};


module.exports = getCurrentWeather;