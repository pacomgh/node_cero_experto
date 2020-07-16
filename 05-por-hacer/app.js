//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear');
        break;

    case 'listar':
        console.log('listar');
        break;

    case 'actualizar':
        console.log('Actualizar');
        break;

    default:
        console.log('Comando no aceptado');

}