const {response, request} = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const loginUser = async(req = request, res = response)=>{
    console.log("####");
    res.json({status:true});
}

const postUser = async (req = request, res = response) => {
    const {name, lastname, email, password} = req.body;
    console.log(req.body);
    try {
        const newUser = new User({name, lastname, email, password});
        //email validation
        const emailExists = await User.findOne({email});
        if(emailExists){
            throw {error:{message:"El correo ya existe"}}
        }
        //encript password
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password,salt);
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.status(404).json(error);
    }
}

module.exports = {
    postUser,
    loginUser
};