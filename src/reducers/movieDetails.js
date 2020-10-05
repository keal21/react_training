import {CANCEL_DETAIL_MOVIE, SHOW_DETAIL_MOVIE} from "../actions";

const movieDetails = (state = null, action) => {
    switch (action.type) {
        case SHOW_DETAIL_MOVIE:
            return action.item;
        case CANCEL_DETAIL_MOVIE:
            return null;
        default:
            return state;
    }
};

export default movieDetails;
