import {GET_FILTER_LIST, SELECT_FILTER} from "../actions";
import {FILTERS} from "../mock/MOCK";

export const FILTER_ALL = 'ALL';

const initialState = {
    list: [],
    selectedValue: null,
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTER_LIST:
            return {list: FILTERS, selectedValue: null};
        case SELECT_FILTER:
            return {...state, selectedValue: action.item === FILTER_ALL ? null : action.item};
        default:
            return state;
    }
};

export default filter;
