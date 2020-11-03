import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_MOVIE_LIST} from "../actions";
import {addMovieMock, deleteMovieMock, editMovieMock, getMovieListMock} from "../mock/MOCK";

const movieList = (state = [], action) => {
    switch (action.type) {
        case GET_MOVIE_LIST:
            return getMovieListMock();
        case ADD_MOVIE:
            return addMovieMock(action.item);
        case EDIT_MOVIE:
            return editMovieMock(action.item);
        case DELETE_MOVIE:
            return deleteMovieMock(action.item);
        default:
            return state;
    }
};

export default movieList;
