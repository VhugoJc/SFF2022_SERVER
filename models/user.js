const {Schema, model} = require('mongoose');
const userSchema = Schema({
    name:{
        type:String,
        required:[true, 'El nombre es obligatorio']
    },
    lastname:{
        type:String,
        required:[true,'El apellido es obligatorio']
    },
    email:{
        type:String,
        required:[true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type:String,
        required:[true, 'La contraseña es obligatoria']
    },
    img:{
        type:String
    },
    role:{
        type: String,
        required:[true, 'Rol incorrecto'],
        enum: ['ADMIN_ROLE','USER_ROLE'],
        default:'USER_ROLE'
    },
    status:{
        type:Boolean,
        default: true
    },
})
userSchema.methods.toJSON = function(){
    const {__v,password,_id,...user} = this.toObject();
    user._uid=_id;
    return user; //user data without password and version is returned
}

module.exports = model('User',userSchema);