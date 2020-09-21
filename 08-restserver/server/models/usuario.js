//trabaja el modelo de datos
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//obtenemos el cascaron para obtener esquemas de mongoose
let Schema = mongoose.Schema;

//creamos variable para los roles
let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'], //definimos los roles permitidos
    message: '{VALUE} no es un rol válido' //mensaje de error
};
//definimos el schema
let usuarioSchema = new Schema({
    nombre: {
        //tipo de dato que requerimos para este dato<nombre>
        type: String,
        //se manda el mensaje cuando no se da el nombre
        required: [true, 'El nombre es necesario']
    },
    email: { //definimos el campo que queremos sea unico
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: { //no es obligatoria
        type: String,
        required: false
    },
    role: { //default 'USER_ROLE
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos //mandamos los roles validos para el usuario
    },
    estado: {
        type: Boolean,
        default: true,
    }, //boolean
    google: {
        type: Boolean,
        default: false
    } //boolean
});
//para no regresar la contraseña, se llama cuando se intenta imprimir
usuarioSchema.methods.toJSON = function() {
    let user = this; //igual a lo ue tenga en ese momento}
    let userObject = user.toObject(); //obtenemos las propiedades y metodos
    delete userObject.password; //borramos el password

    return userObject;
}
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });


//exportamos el modelo con un nombre especifico para el modelo y el modelo
module.exports = mongoose.model('Usuario', usuarioSchema);