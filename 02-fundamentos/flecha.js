//function sumar(a, b) {
//    return a + b;
//}

//los argumentos/parametros se pasan entre parentesis
//= ( x, y) =>
//let sumar = (a, b) => a + b;

//console.log(sumar(10, 20));

//si no hay argumentos/parametros solo se escriben los parentesis
//let saludar = () => 'Hola mundo';
//console.log(saludar());
//cuando solo se tiene un parametro/argumento se puede poner sin parentesis
/* let saludar = nombre => `Hola ${nombre}`; */
/* console.log(saludar('Paco')); */

let deadpool = {
    nombre: 'Wade',
    apellido: "Winstom",
    poder: 'Regeneracion',

    //el this apunta al valor del this fuera de la funcion
    //si necesitamos usar this se deja nombrefuncion(){}
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder ${ this.poder }`;
    }
};
console.log(deadpool.getNombre());