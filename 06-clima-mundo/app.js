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

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLong(argv.direccion)
    .then(console.log);
//console.log(argv.direccion);