const express = require('express');
//const { registerPartial, registerPartials } = require('hbs');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//construimos un middleware
//Es una instruccion o callback siempre sin importar la url que se pida
app.use(express.static(__dirname + '/public'));
//express HBS engine
//usamos dirname porque el url no es local, toma al path en donde se aloja
//el proyecto y concatenamos la carpeta para tomar el otro archivo
//registra la carpeta que tiene los parciales para poder usarlos en los html
hbs.registerPartials(__dirname + '/views/partials');
//sing hbs as the default view engine requires just 
//one line of code in your app setup. 
app.set('view engine', 'hbs');

//si tenemos un get debemos tener cuidado, pueden chocar los servicios
app.get('/', (req, res) => { //hace un get de todo lo que esta despues del '/'
    //res.send('Hola mundo');
    //usamos render con hbs para renderizar la pagina - ('pagina')
    res.render('home', {
        nombre: 'francisco'
    });

    /* let salida = {
        nombre: 'Paco',
        edad: 27,
        url: req.url
    } */

    //res.send(salida); //envia como respuesta el objeto salida
});
//para crear otra ruta a otra pagina
app.get('/about', (req, res) => { //hace un get de todo lo que esta despues del '/'
    //usamos render con hbs para renderizar la pagina - ('pagina')
    res.render('about');
});

//escucha por el puerto 3000
app.listen(3000, () => {
    console.log('Escuchando peticiones por el puerto 3000');
});