//al ser el primer archivo lo lee y ejecuta al principio, configura todo
//su contenido
require('./config/config');
const express = require('express');
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

app.get('/usuario', function(req, res) {
        res.json('get usuario')
    })
    //crear nuevos registros
app.post('/usuario', function(req, res) {
    //el body aparece cuando el body parser procesa cualquier payload
    //de las peticiones
    let body = req.body;

    if (body.nombre === undefined) {
        //cachamos el error y mandamos una respuesta entendible
        res.status(400).json({
            ok: false,
            mensaje: "El nombre en necesario"
        });
    } else {
        res.json({
            //obtenemos los datos que se estan enviando y los mostramos en postman
            persona: body
        });
    }


});
//actualmente se usa para actualizar informacion
app.put('/usuario/:id', function(req, res) {
    //obtenemos el parametro del id para actualizar
    let id = req.params.id; //id del final es el parametro
    //retorna lo que se mande en el url como id
    res.json({
        id
    });
});
//actualmente se usa solo para inhabilitar usuarios
app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});