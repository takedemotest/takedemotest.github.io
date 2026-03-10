const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

exports.register = async(req, res)=>{
    
    try{
    const {name, email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:'user already exists'})
    };
    const hasPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        name,
        email,
        password:hasPassword
    })
    res.status(201).json({message: "user register sucessfully"})}
            catch (error) {
            res.status(500).json({ message: "Server error" });
        }
}

exports.login = async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({message:'Invalid credentials'});
    };
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.status(401).json({message:'Invalid credentials'});
    }
    const token =jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    )
    res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        token
    });
};