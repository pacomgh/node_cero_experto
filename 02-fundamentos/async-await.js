//asyn await

/*
let getNombre = async() => {
    return 'Francisco';
}*/

let getNombre = () => {
    return new Promise((resolve, reject) => {


        resolve('Francisco');
    });
}

getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('Error de ASYNC', e)
})