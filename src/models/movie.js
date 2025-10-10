import { v4 as uuid } from "uuid";

const movies = [
    {
        _id: "a3682672-0ee4-1284-8759-35ee253329zv",
        title: "Jungle-Cuise",
        category: "movie",
        genre: "Adventure",
        year: "2021",
        imageUrl: "/img/jungle-cruise.jpeg",
        rating: 6.20,
        description: "A interesting story about the jungle life"
    },
    {
        _id: "a3682672-0ee4-1284-8759-35ee253320zv",
        title: "Aurora",
        category: "movie",
        genre: "Cartoon",
        year: "2020",
        imageUrl: "/img/the-little-mermaid.jpg",
        rating: 8.20,
        description: "A long time ago there was a princess named Aurora..."
    }
]

export default class Movie {

    constructor(data) {
        Object.assign(this, data);

        this._id = uuid()
    }
    static find(filter = {}) {
        let result = movies.slice()

        if (filter._id) {
            result = result.find(movie => movie._id === filter._id)
        }
        if(filter.title){
result= result.filter(movie => movie.title.toLocaleLowerCase() === filter.title.toLocaleLowerCase())
        }
        if(filter.genre){
result= result.filter(movie => movie.genre.toLocaleLowerCase() === filter.genre.toLocaleLowerCase())
        }
        if(filter.year){
            result= result.filter(movie => movie.year === filter.year)
        }
        return result

    }

    static findOne(filter ={}) {
        let result= movies
        

        return result
    }
    get id() {
        return this._id
    }

    save() {
        movies.push(this)

        console.log(movies)

        return this
    }
}