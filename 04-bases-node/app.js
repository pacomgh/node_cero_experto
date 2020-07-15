//require paquete
const colors = require('colors');
const argv = require('./config/yargs').argv;
//const { nombreImport } importa el import y lo destructura para poder usar sus prestaciones
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


//let argv2 = process.argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log("listar");
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo} `))
            .catch(e => console.log(e))
        break;
    default:
        console.log('El comando no se reconoce');

}

//console.log(argv.base);
//console.log('El limite es', argv.limite);

//let base = 'abc';
/* let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base*i }\n`;
}
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado`);
}); */