//al ser el primer archivo lo lee y ejecuta al principio, configura todo
//su contenido, este archivo debe ser simple
require('./config/config');
const express = require('express');
const moongose = require('mongoose');

const app = express();

//body parser procesa la info y la serializa en un json(obtenemos del post)
const bodyParser = require('body-parser');

//app.use son middleware, funciones que se disparan cada que pasa por esas lineas
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

//importamos y usamos las rutas del usuario
app.use(require('./routes/usuario'));


//hacemos la conexion a mongodb mediante el puero #####/BD
moongose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    //definimos un callback si se hace o no la conexion
    if (err) throw err;

    console.log('Base de datos ONLINE!');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});