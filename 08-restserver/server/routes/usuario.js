//este archivo maneja las rutas de las acciones para los usuarios
const express = require('express');
const bcrypt = require('bcrypt');
const _ = require("underscore"); //el estandar es "_"
const Usuario = require('../models/usuario'); //importamos el usuario
const usuario = require('../models/usuario');


const app = express();

//servicio para paginar y traer a los usuarios en esta app
app.get('/usuario', function(req, res) {
    //parametros opcionales
    //desde que registro quieres, si no se indica es desde 0
    let desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 5;
    limite = Number(limite);
    //regresamos todos los usuarios    
    usuario.find({})
        .skip(desde) //obtenemos los siguientes(#)
        .limit(5) //limitamos la cantidad de registros devueltos
        .exec((err, usuarios) => { //ejecuta la peticion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                usuarios
            });

        });
});
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
//usamos el id del registro para hacer las peticiones
app.put('/usuario/:id', function(req, res) {
    //obtenemos el parametro del id para actualizar
    let id = req.params.id; //id del final es el parametro
    //obtenemos el body de la peticion
    //(objeto de las propiedades, arreglo de propiedades permitidos)
    //quitamos las propiedades que no queramos que toque el usuario
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

    //realizamos la actualizacio con el modelo
    //busca el id y actualiza si lo encuentra
    //id, opciones de lo que actualizamos, callback
    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true },
        (err, usuarioDB) => {
            //una vez obtenido el usuario lo guardamos en la bd
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                usuario: usuarioDB
            });
        });

});
//actualmente se usa solo para inhabilitar usuarios
app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
});

//exportamos el archivo de app y que tiene las rutas de este archivo
module.exports = app;