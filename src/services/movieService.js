import Movie from "../models/movie.js";



export default {
    getAll(){
        return Movie.find()
    }
}