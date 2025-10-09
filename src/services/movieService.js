import { create } from "express-handlebars";
import Movie from "../models/movie.js";



export default {
    getAll(){
        return Movie.find()
    },
    create(movieData) {
   console.log(movieData)

   const movie= new Movie(movieData);

    return movie.save()
}
}
