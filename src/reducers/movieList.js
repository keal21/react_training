import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIE_LIST} from "../actions";
import {MOVIES} from "../mock/MOCK";

let nextMovieId = 0;

const movieList = (state = [], action) => {
    switch (action.type) {
        case GET_MOVIE_LIST:
            return MOVIES.map(item => {
                return {...item, id: nextMovieId++}
            });
        case ADD_MOVIE:
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.item.title,
                    overview: action.item.overview,
                    releaseDate: action.item.releaseDate,
                    genre: action.item.genre,
                    runtime: action.item.runtime,
                    url: action.item.url,
                }
            ];
        case EDIT_MOVIE:
            return state.map(movie =>
                movie.id === action.item.id
                    ? {
                        ...movie,
                        id: action.item.id,
                        title: action.item.title,
                        overview: action.item.overview,
                        releaseDate: action.item.releaseDate,
                        genre: action.item.genre,
                        runtime: action.item.runtime,
                        url: action.item.url,
                    }
                    : movie
            );
        case DELETE_MOVIE:
            return state.filter(movie => movie.id !== action.item.id);
        default:
            return state;
    }
};

export default movieList;
