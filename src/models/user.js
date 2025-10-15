import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema= new Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre('save', async function (){

    this.password= await bcrypt.hash(this.password,12)
})
const User= model('User',userSchema)

export default User