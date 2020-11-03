import {FILTER_ALL} from "../reducers/filter";

export let MOVIES = [
    {title: 'MOVIE 1', overview: 'OVERVIEW 5', releaseDate: '2003', genre: 'DOCUMENTARY', runtime: 'RUNTIME 5', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {title: 'MOVIE 2', overview: 'OVERVIEW 4', releaseDate: '2002', genre: 'COMEDY', runtime: 'RUNTIME 1', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {title: 'MOVIE 3', overview: 'OVERVIEW 3', releaseDate: '2004', genre: 'HORROR', runtime: 'RUNTIME 3', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {title: 'MOVIE 4', overview: 'OVERVIEW 2', releaseDate: '2005', genre: 'CRIME', runtime: 'RUNTIME 2', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
    {title: 'MOVIE 5', overview: 'OVERVIEW 1', releaseDate: '2001', genre: 'COMEDY', runtime: 'RUNTIME 4', url: 'https://images-na.ssl-images-amazon.com/images/I/51NDT81AY7L._SX343_BO1,204,203,200_.jpg'},
];

export const FILTERS = [
    FILTER_ALL,
    'DOCUMENTARY',
    'COMEDY',
    'HORROR',
    'CRIME',
];

export const SORTS = [
    {name: 'TITLE', field: 'title'},
    {name: 'OVERVIEW', field: 'overview'},
    {name: 'YEAR', field: 'releaseDate'},
    {name: 'GENRE', field: 'genre'},
];

let nextMovieId = 0;

export function getMovieListMock() {
    MOVIES.forEach((item) => {
        if (!item.id) {
            item.id = nextMovieId++;
        }
    });

    return MOVIES;
}

export function addMovieMock(item) {
    MOVIES = [
        ...MOVIES,
        {
            id: nextMovieId++,
            title: item.title,
            overview: item.overview,
            releaseDate: item.releaseDate,
            genre: item.genre,
            runtime: item.runtime,
            url: item.url,
        }];

    return MOVIES;
}

export function editMovieMock(item) {
    MOVIES = MOVIES.map(movie =>
        movie.id === item.id
            ? {
                ...movie,
                id: item.id,
                title: item.title,
                overview: item.overview,
                releaseDate: item.releaseDate,
                genre: item.genre,
                runtime: item.runtime,
                url: item.url,
            }
            : movie
    );

    return MOVIES;
}

export function deleteMovieMock(item) {
    MOVIES = MOVIES.filter(movie => movie.id !== item.id);

    return MOVIES;
}
