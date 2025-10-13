import { Schema, model, Types } from "mongoose";

const movieSchema= new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: String,
    imageUrl: String,
    rating: String,
    description: String,
    cast:{
        type: Types.ObjectId,
        ref: 'Cast'
    }
})

const Movie= model('Movie',movieSchema)

export default Movie