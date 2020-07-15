const opts = {
    base: {
        demand: true, //base es un valor oblogatorio
        alias: 'b' //define un alias para el argumento de la base
    },
    limite: {
        alias: 'l',
        default: 10 //ponemos un valor default a este argumento
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime las tablas de multiplicar', opts)
    .command('crear', 'Genera un archivo con las tablas de multiplicar', opts)
    .argv;

module.exports = {
    argv
}