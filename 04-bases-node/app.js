//require paquete
const argv = require('yargs')
    .command('listar', 'Imprime las tablas de multiplicar', {
        base: {
            demand: true, //base es un valor oblogatorio
            alias: 'b' //define un alias para el argumento de la base
        },
        limite: {
            alias: 'l',
            default: 10 //ponemos un valor default a este argumento
        }
    })
    .argv;
//const { nombreImport } importa el import y lo destructura para poder usar sus prestaciones
const { crearArchivo } = require('./multiplicar/multiplicar');


let argv2 = process.argv;

//console.log(argv.base);
console.log('El limite es', argv.limite);

//let base = 'abc';
/* let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base*i }\n`;
}
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado`);
}); */

/* crearArchivo(base)
    .then(archivo => console.log(`Atchivo creado ${archivo} `))
    .catch(e => console.log(e)) */