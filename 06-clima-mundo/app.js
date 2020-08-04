const axios = require('axios');

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
    baseURL: `http://api.openweathermap.org/data/2.5/forecast?q=${encodedUrl}&APPID=2e3bc34cd2dcdeb1dc883242e0b4d52f`,
    headers: {
        'APPID': '2e3bc34cd2dcdeb1dc883242e0b4d52f'
    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.city);
    })
    .catch(err => {
        console.log('Error!!!!', err);
    });