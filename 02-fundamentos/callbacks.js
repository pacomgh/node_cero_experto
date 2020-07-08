//un callback se ejecuta despues de que sucede algo

/*setTimeout(() => {
    console.log('Hola mundo');
}, 3000);*/

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Paco',
        id
    }

    if (id === 20) callback(`El usuario con id ${id} no existe en la BD`);
    else callback(null, usuario);
}

getUsuarioById(1, (err, usuario) => {

    if (err) return console.log(err);
    else console.log('Usuario de base de datos', usuario)
});