import { v4 as uuid } from "uuid";

const movies= [
 {
    _id:"a3682672-0ee4-1284-8759-35ee253329zv",
    title: "Jungle-Cuise",
    category: "movie",
    genre: "Adventure",
    year: "2021",
    imageUrl: "/img/jungle-cruise.jpeg",
    rating: 6.20,
    description: "A interesting story about the jungle life"
},
{
    _id:"a3682672-0ee4-1284-8759-35ee253320zv",
    title: "Aurora",
    category: "movie",
    genre: "Cartoon",
    year: "2020",
    imageUrl: "/img/the-little-mermaid.jpg",
    rating: 8.20,
    description: "A long time ago there was a princess named Aurora..."
}
]

export default class Movie{

    constructor(data){
        Object.assign(this,data);

        this._id= uuid()
    }
    static find(){
return [...movies]
    }

    get id(){
        return this._id
    }

    save(){
        movies.push(this)

        console.log(movies)

        return this
    }
}