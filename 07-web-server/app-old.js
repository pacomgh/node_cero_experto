const http = require('http');

http.createServer((req, resp) => {

        //mandamos una respuesta tipo json como servicio
        resp.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Paco',
            edad: 27,
            url: req.url
        }

        //mandamos la respuesta 
        //resp.write('Hola mundo');
        resp.write(JSON.stringify(salida));
        //indica que ya terminamos la respuesta
        resp.end()

    })
    .listen(8080);

console.log("Escuchando el puerto 8080");