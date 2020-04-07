let deadpool = {
    nombre: 'Wade',
    apellido: "Winstom",
    poder: 'Regeneracion',

    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder ${ this.poder }`;
    }
};
//let seguido de {} destructura el objeto
//{ atributos } = de donde se sacan(objeto)
//si queremos darle un nuevo identificar a un atributo usamos atributo:nuevoAtributo
let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);