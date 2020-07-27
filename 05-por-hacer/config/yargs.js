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
    //borrar: {
    //    default: false,
    //    alias: 'b',
    //    desc: 'Borra un elemento de la base de datos'
    //}
}

//codigo del profe
/* const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completada o pendiente una tarea'
} */

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'actualiza un elemento de la lista de por hacer', opts)
    .command('borrar', 'elimina un elemento de la lista de cosas por hacer', opts)
    .help()
    .argv;

module.exports = {
    argv
}