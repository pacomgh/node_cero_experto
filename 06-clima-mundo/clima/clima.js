const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2e3bc34cd2dcdeb1dc883242e0b4d52f&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}