import { Schema,model } from "mongoose";

const castSchema= new Schema({
    name: {
        type: String,
        required:[true,'Cast name reqired.']
    },
    age: {
        type:Number,
        required:[true, 'Age required.']
    },
    born: String,
    imageUrl: String,

});

const Cast= model('Cast',castSchema)
    
export default Cast