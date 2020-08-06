const axios = require('axios');

//usamos const porque es mas ligera y para no reasignar la variable
//una funcion async siempre regresa una promesa
const getLugarLatLong = async(dir) => {

    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/forecast?q=${encodedUrl}&APPID=yourappid`,
        headers: {
            'APPID': 'yourappid'
        }
    });

    const resp = await instance.get();

    if (resp.data.lenght === 0)
        throw new Error(`No hay resultados para ${dir}`);
    /* 
        instance.get()
            .then(resp => {
                console.log(resp.data.city);
            })
            .catch(err => {
                console.log('Error!!!!', err);
            }); */

    const data = resp.data.city;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    console.log(data);

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLong
}