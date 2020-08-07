/* const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

const encodedUrl = encodeURI(argv.direccion);
console.log(encodedUrl);

const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/forecast?q=${encodedUrl}&APPID=yourappid`,
    headers: {
        'APPID': 'yourappid'
    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.city);
    })
    .catch(err => {
        console.log('Error!!!!', err);
    }); */


const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
/* 
lugar.getLugarLatLong(argv.direccion)
    .then(console.log); */
//console.log(argv.direccion);  
/* clima.getClima(-40.75000, -74.00000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direccion) => {
    //lo que hizo el profesor
    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }



    /* //lo que yo hice
    info = await lugar.getLugarLatLong(direccion);
    latitude = info.lat;
    longitud = info.lng;
    //console.log("informacion de " + latitude + " " + longitud);
    weather = clima.getClima(latitude, longitud);
    console.log(weather);
    //console.log("clima de :" + clima.getClima(latitude, longitud)); */
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);