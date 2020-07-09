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
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

//{nombre: Manuel, salario: 3000}
//no se encontro un salario para el usuario Manuel
/*let getSalario = (empleado, callback) => {
    let salarioEmpleado = salarios.find(empleado => empleado.nombre === empleado)

    if (!id) {
        callback(`No se encontro un salario para el usuario ${empleado}`);
    } else {
        callback(null, empleado);
    }
}
mi pobre intento*/
//el mero bueno
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleados.id
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${ resp.nombre } es de ${ resp.salario }$`);
    });

    //console.log(empleado);
});

/*mi pobre intento
getSalario("Manuel", (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});
*/