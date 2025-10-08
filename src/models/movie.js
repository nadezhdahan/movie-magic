const movies= [
 {
    id:"a3682672-0ee4-1284-8759-35ee253329zv",
    title: "Jungle-Cuise",
    category: "movie",
    genre: "Adventure",
    year: "2021",
    imageUrl: "/img/jungle-cuise.jpeg",
    rating: 6.20,
    description: "A interesting story about the jungle life"
}
]

export default class Movie{
    static find(){
return [...movies]
    }
}