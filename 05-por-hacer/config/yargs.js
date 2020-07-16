opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    },
    //crear: {
    //    demand: true,
    //    alias: 'c',
    //    desc: 'sirve para crear una nueva tarea'
    //},
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marcar como completada o pendiente una tarea'
    },
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'actualiza un elemento de la lista de por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}