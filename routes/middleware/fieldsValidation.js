const {validationResult} = require('express-validator');

const fieldsValidation = (req, res, next) =>{
    const errors = validationResult(req); //extract if exists any error from express validator
    if(!errors.isEmpty()){
        return res.status(404).json(errors)
    }
    next();
}

module.exports = {fieldsValidation}