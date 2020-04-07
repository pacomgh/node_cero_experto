console.log('Inicio del programa');

setTimeout(function() {
    console.log('primer timeout');

}, 3000);

setTimeout(function() {
    console.log('segundo timeout');

}, 0);

setTimeout(function() {
    console.log('tercer timeout');

}, 0);

console.log('fin del programa');