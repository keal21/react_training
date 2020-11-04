import {CLOSE_MOVIE_DETAILS, SHOW_MOVIE_DETAILS} from "../actions/movieActions";

const movieDetailsReducer = (state = null, action) => {
    switch (action.type) {
        case SHOW_MOVIE_DETAILS:
            return action.item;
        case CLOSE_MOVIE_DETAILS:
            return null;
        default:
            return state;
    }
};

export default movieDetailsReducer;
