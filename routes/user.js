const {Router} = require('express');
const router = Router();
const {postUser,loginUser } = require('../controllers/user');
const { check } = require('express-validator');
const { fieldsValidation } = require('./middleware/fieldsValidation');

// Route: /api/user

router.post('/',[
    check('email','El correo no es valido').isEmail(),
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('password','La contraseña debe ser mayor a 6 letras').isLength({min:6}),
    fieldsValidation
],postUser);

router.get('/',loginUser);

module.exports = router;