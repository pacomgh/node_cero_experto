const express = require('express');
const app = express();

//construimos un middleware
//Es una instruccion o callback siempre sin importar la url que se pida
app.use(express.static(__dirname + '/public'));
//sing hbs as the default view engine requires just 
//one line of code in your app setup. 
app.set('view engine', 'hbs');

//si tenemos un get debemos tener cuidado, pueden chocar los servicios
app.get('/', (req, res) => { //hace un get de todo lo que esta despues del '/'
    //res.send('Hola mundo');
    //usamos render con hbs para renderizar la pagina - ('pagina')
    res.render('home', {
        nombre: 'Paco',
        anio: new Date().getFullYear() //obtiene el año en curso
    });

    /* let salida = {
        nombre: 'Paco',
        edad: 27,
        url: req.url
    } */

    //res.send(salida); //envia como respuesta el objeto salida
});

//escucha por el puerto 3000
app.listen(3000, () => {
    console.log('Escuchando peticiones por el puerto 3000');
});