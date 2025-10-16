import User from "../models/user.js"
import bcrypt from 'bcrypt'

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
    }
}