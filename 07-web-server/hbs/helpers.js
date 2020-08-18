const hbs = require('hbs');
//cuando el archivo se importa el otro lugar, se ejecutan las funciones

//un helper es una funcion que se dispara cuando el template lo requiere
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});