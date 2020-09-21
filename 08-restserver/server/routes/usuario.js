//este archivo maneja las rutas de las acciones para los usuarios
const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario'); //importamos el usuario

const app = express();

app.get('/usuario', function(req, res) {
        res.json('get usuario local')
    })
    //crear nuevos registros
app.post('/usuario', function(req, res) {
    //el body aparece cuando el body parser procesa cualquier payload
    //de las peticiones
    let body = req.body;

    //utilizamos el modelo para grabar en la bd
    //creamos instancia del schema usuario y tomamos sus valores
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        //hashsybnc encripta sin usar callback o promesa, lo hace directamente
        //(data a encriptar, #de vueltas)
        password: bcrypt.hashSync(body.password, 10),
        //img: body.img
        role: body.role
    });
    //grabamos en la bd, regresa un error o un objeto de tipo usuario
    usuario.save((err, usuarioDB) => {
        if (err) {
            //hacemos el return aqui para que termino y no escribir mas codigo
            return res.status(400).json({
                ok: false, //notificamos que hubo un error
                err //mandamos el error
            });
        }
        //el objeto siempre existe pero no se manda en la respuesta
        //usuarioDB.password = null;
        //si se hace correctamente regresamos el usuaio de la bd
        res.json({
            ok: true, //lo hizo correctamente
            usuario: usuarioDB
        });
    });
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

//exportamos el archivo de app y que tiene las rutas de este archivo
module.exports = app;