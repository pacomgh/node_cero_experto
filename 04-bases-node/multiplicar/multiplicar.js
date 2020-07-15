//importacion de filesystem
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    for (var i = 0; i <= limite; i++)
        console.log(`${base} * ${i} = ${base*i}`);
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`.green)

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}