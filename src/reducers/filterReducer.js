import {FETCH_FILTERS_SUCCESS, SELECT_FILTER} from "../actions/filterActions";

const initialState = {
    list: [],
    selectedValue: '',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILTERS_SUCCESS:
            return {list: action.list, selectedValue: action.list[0].value};
        case SELECT_FILTER:
            return {...state, selectedValue: action.item};
        default:
            return state;
    }
};

export default filterReducer;
