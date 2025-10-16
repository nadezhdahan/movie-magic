import User from "../models/user.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET= 'hdshu36t34u8rejifr984trfhnie'
export default {
    register(userData){
      return User.create(userData)  
    },
    async login(email,password){
const user= await User.findOne({email})

if (!user){
    throw new Error('Invalid User or Password')
}

const isValid= await bcrypt.compare(password,user.password)

if(!isValid){
    throw new Error('Invalid User or Password')
}

const payload={
    id: user.id,
    email: user.email
}

const token= jwt.sign(payload, JWT_SECRET,{expiresIn:'2h'})

return token
    }
}