/*este archivo nos servira para cambiar entre el entorno de desarrollo
y de produccion sin modificar en archivo de la aplicación*/

//===================
//Puerto
//===================
//process siempre esta corriendo, modificamos process
process.env.PORT = process.env.PORT || 3000;