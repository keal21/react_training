import {FETCH_SORTS_SUCCESS, SELECT_SORT} from "../actions/sortActions";

const initialState = {
    list: [],
    selectedValue: '',
};

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SORTS_SUCCESS:
            return {list: action.list, selectedValue: action.list[0].value};
        case SELECT_SORT:
            return {...state, selectedValue: action.item};
        default:
            return state;
    }
};

export default sortReducer;
