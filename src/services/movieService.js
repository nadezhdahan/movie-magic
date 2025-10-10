import { create } from "express-handlebars";
import Movie from "../models/movie.js";



export default {
    getAll(filter){
        return Movie.find(filter)
    },
    getOne(movieId){
return Movie.findOne({_id: movieId})
    },
    create(movieData) {
   console.log(movieData)

   const movie= new Movie(movieData);

    return movie.save()
}
}
