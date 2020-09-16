//trabaja el modelo de datos
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//obtenemos el cascaron para obtener esquemas de mongoose
let Schema = mongoose.Schema;

//creamos variable para los roles
let rolesValidos = {
        values: ['ADMIN_ROLE', 'USER_ROLE'], //definimos los roles permitidos
        message: '{VALUE} no es un rol válido' //mensaje de error
    }
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
//
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });


//exportamos el modelo con un nombre especifico para el modelo y el modelo
module.exports = mongoose.model('Usuario', usuarioSchema);