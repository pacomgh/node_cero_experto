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

let getEmpleado = async(id) => {
        //promesa async, no se usa return, resolve ni reject

        let empleadoDB = empleados.find(empleado => empleado.id === id)
            //para capturar el error se utilzia throw new Error
        if (!empleadoDB) {
            throw new Error(`No existe un empleado con el id ${ id }`);
        } else {
            //para regresar una respuesta positiva se utiliza el return y el objeto
            return empleadoDB;
        }
    }
    //tarea transformar esto en una respuesta async
let getSalario = (empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleados.id
        };
    }

}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${ resp.nombre } tiene un salario de ${ resp.salario }$`;

    console.log(empleado);
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));