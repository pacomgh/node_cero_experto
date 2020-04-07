//function sumar(a, b) {
//    return a + b;
//}

//let sumar = (a, b) => a + b;

//console.log(sumar(10, 20));

//let saludar = () => 'Hola mundo';
//console.log(saludar());
//cu<ndo solo se tiene un parametro se puede poner sin parentesis
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