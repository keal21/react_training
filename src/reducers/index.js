import {combineReducers} from 'redux';
import movieList from './movieList';
import movieEdit from "./movieEdit";
import movieDetails from "./movieDetails";
import sort from "./sort";
import filter from "./filter";

export default combineReducers({
    movieList,
    movieEdit,
    movieDetails,
    sort,
    filter,
});
