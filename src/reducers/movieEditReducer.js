import {CANCEL_EDIT_MOVIE, START_ADD_MOVIE, START_EDIT_MOVIE} from "../actions/movieActions";

function getNewMovie() {
    return {id: '', title: '', overview: '', releaseDate: '', genre: '', runtime: '', url: ''};
}

const movieEditReducer = (state = null, action) => {
    switch (action.type) {
        case START_ADD_MOVIE:
            return getNewMovie();
        case START_EDIT_MOVIE:
            return action.item;
        case CANCEL_EDIT_MOVIE:
            return null;
        default:
            return state;
    }
};

export default movieEditReducer;
