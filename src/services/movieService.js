import Movie from "../models/Movie.js";

export default {
     getAll(filter= {}) {
        let result =  Movie.find()

        
        if (filter.title) {
            // TODO Search by title, partial match, case insensitive
            result = result.find({title:{ $regex: filter.title, $options:'i'}});
        }

        if (filter.genre) {
            // TODO Search by genre, exact match, case insensitive
            result = result.find({genre:{ $regex: filter.genre, $options:'i'}});
            
        }

        if (filter.year) {
            result = result.where('year').equals(filter.year)
        }


        return result
    },
    getOne(movieId) {
        return Movie.findOne({_id: movieId});
    },
    create(movieData) {
        movieData.rating = Number(movieData.rating);

        const movie = new Movie(movieData);

        return movie.save();
    },

    async attach(movieId,castId){
        const movie= await Movie.findById(movieId);

        movie.casts.push(castId)

        return movie.save()
    }
}
