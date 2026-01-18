const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  const user = await User.findOne({email})

if (!user){
  return res.status(401).json({message:'Invalid credentials'})
}

const isMatch = await bcrypt.compare(password, user.password);
if(!isMatch){
  return res.status(401).json({message:"Invalid Credentials"})
}
  return res.json({
      id: user._id,
      name: user.name,
      email:user.email,
      token: 'fake-jwt-token'
    });
});

router.post('/register',async (req, res)=>{
  try{
  const {name, email, password} = req.body;
  if(!name || !email || !password){
    return res.status(400).json({message:'All fields are required'});
  }


const existingUser = await User.findOne({email})
if(existingUser){
  return res.status(409).json({message:'User already exists'})
}

const hashedPassword = await bcrypt.hash(password, 10)

const user =await User.create({
  name,
  email,
  password:hashedPassword
})

const token = jwt.sign(
  {id:user._id},
  "SECRET_KEY",
  {expiresIn:'1h'}
)

  res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    });
}catch(err){
  res.status(500).json({message:"server error"})
}
});

module.exports = router;
