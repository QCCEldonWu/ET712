/* 

Eldon Wu

Homework 3 – Objects and exception handling in JS 

*/
class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `'${this.title}' (${this.year}) directed by ${this.director}`;
    }
}

class MovieCollection {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(title) {
        const index = this.movies.findIndex(movie => movie.title === title);
        if (index !== -1) {
            this.movies.splice(index, 1);
        } else {
            throw new Error("Movie not found");
        }
    }

    showMovies() {
        if (this.movies.length === 0) {
            throw new Error("No movies in the collection");
        }
        this.movies.forEach(movie => console.log(movie.getDetails()));
    }
}