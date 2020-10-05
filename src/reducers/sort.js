import {GET_SORT_LIST, SELECT_SORT} from "../actions";
import {SORTS} from "../mock/MOCK";

const initialState = {
    list: [],
    selectedValue: null,
};

const sort = (state = initialState, action) => {
    switch (action.type) {
        case GET_SORT_LIST:
            return {list: SORTS, selectedValue: SORTS[0].field};
        case SELECT_SORT:
            return {...state, selectedValue: action.item};
        default:
            return state;
    }
};

export default sort;
