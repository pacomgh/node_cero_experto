let empleados = [{
    id: 1,
    nombre: 'Francisco'
}, {
    id: 2,
    nombre: 'Manuel'
}, {
    id: 3,
    nombre: 'Fernanda'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {
    //resolve se llama si la promsesa tiene exito(existe empleado)
    //reject si no es exitosa(no existe empleado)
    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
        return new Promise((resolve, reject) => {
            let salarioDB = salarios.find(salario => salario.id === empleado.id);

            if (!salarioDB) {
                reject(`No se encontro un salario para el empleado ${empleado.nombre}`);
            } else {
                resolve({
                    nombre: empleado.nombre,
                    salario: salarioDB.salario,
                    id: empleados.id
                });
            }

        });
    }
    /*
    getEmpleado(3).then(empleado => {
        console.log('Empleado de BD', empleado);

        getSalario(empleado).then(resp => {
            console.log(`El salario de ${ resp.nombre} es de ${ resp.salario}`);
        }, (err) => {
            console.log(err);
        })
    }, (err) => {
        console.log(err);
    });*/

/** Promesas en cadena **/

getEmpleado(1).then(empleado => {
    //se hace return de una promesa para encadenar otra promesa
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${ resp.nombre} es de ${ resp.salario}`);
}).catch(err => {
    //catch atrapa los errores 
    console.log(err);
});