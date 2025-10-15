import Movie from "../models/Movie.js";

export default {
   async getAll(filter = {}) {
    let query = Movie.find();

    if (filter.title) {
        query = query.find({ title: { $regex: filter.title, $options: 'i' } });
    }

    if (filter.genre) {
        query = query.find({ genre: { $regex: new RegExp(`^${filter.genre}$`), $options: 'i' } })
    }

    if (filter.year) {
        query = query.where('year').equals(filter.year);
    }

    return await query.exec();
}
,
    
    getOne(movieId) {
        // return Movie.findOne({_id: movieId});
        // return Movie.findById(movieId).populate('casts');
        return Movie.findById(movieId);
    },
    getOneDetailed(movieId) {
        return this.getOne(movieId).populate('casts');
    },
    create(movieData) {
        movieData.rating = Number(movieData.rating);

        // const movie = new Movie(movieData);
        // return movie.save();

        return Movie.create(movieData);
    },
    async attach(movieId, castId) {
        // Add relation method #1
        // const movie = await Movie.findById(movieId);
        // movie.casts.push(castId);
        // return movie.save();

        // Add relation method #2 MongoDB
        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    }
}

