//const { nombreImport } importa el import y lo destructura para poder usar sus prestaciones
const { crearArchivo } = require('./multiplicar/multiplicar');


let base = 'abc';
/* let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base*i }\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado`);
}); */

crearArchivo(base)
    .then(archivo => console.log(`Atchivo creado ${archivo} `))
    .catch(e => console.log(e))