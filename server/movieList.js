const {FILTER_ALL} = require('./filters');

let nextMovieId = 0;

let movies = [
    {id: "" + nextMovieId++, title: 'MOVIE 1', overview: 'OVERVIEW 5', releaseDate: '2003', genre: 'DOCUMENTARY', runtime: 'RUNTIME 5', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {id: "" + nextMovieId++, title: 'MOVIE 2', overview: 'OVERVIEW 4', releaseDate: '2002', genre: 'COMEDY', runtime: 'RUNTIME 1', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {id: "" + nextMovieId++, title: 'MOVIE 3', overview: 'OVERVIEW 3', releaseDate: '2004', genre: 'HORROR', runtime: 'RUNTIME 3', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {id: "" + nextMovieId++, title: 'MOVIE 4', overview: 'OVERVIEW 2', releaseDate: '2005', genre: 'CRIME', runtime: 'RUNTIME 2', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {id: "" + nextMovieId++, title: 'MOVIE 5', overview: 'OVERVIEW 1', releaseDate: '2001', genre: 'COMEDY', runtime: 'RUNTIME 4', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
];

function getMovieList(filter, sort, search) {
    let result = movies.concat();

    if (filter && filter !== FILTER_ALL) {
        result = result.filter(item => item.genre === filter);
    }

    if (search) {
        search = search.toLowerCase();
        result = result.filter(item => item.title.toLowerCase().indexOf(search) !== -1);
    }

    if (sort) {
        result.sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return result;
}

function addMovie(payload) {
    movies.push({
        id: "" + nextMovieId++,
        title: payload.title,
        overview: payload.overview,
        releaseDate: payload.releaseDate,
        genre: payload.genre,
        runtime: payload.runtime,
        url: payload.url,
    });

    return movies;
}

function editMovie(payload) {
    movies = movies.map(movie =>
        movie.id === payload.id
            ? {
                ...movie,
                id: payload.id,
                title: payload.title,
                overview: payload.overview,
                releaseDate: payload.releaseDate,
                genre: payload.genre,
                runtime: payload.runtime,
                url: payload.url,
            }
            : movie
    );

    return movies;
}

function deleteMovie(payload) {
    movies = movies.filter(movie => movie.id !== payload.id);

    return movies;
}

module.exports = {getMovieList, addMovie, editMovie, deleteMovie};
