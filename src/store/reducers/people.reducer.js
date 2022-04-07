import {
    GET_PEOPLE_DETAIL_REQUEST,
    GET_PEOPLE_DETAIL_SUCCESS,
    SEARCH_PEOPLE_REQUEST,
    SEARCH_PEOPLE_SUCCESS,
    SET_PEOPLE_HANDLER_REQUEST,
    SET_PEOPLE_HANDLER_SUCCESS,
} from '../actions/peopleActions';

const intialValue = {
    peopleData: [],
    people_detail: [],
    isLoading: false,
};

const people = (state = intialValue, { payload, type }) => {
    switch (type) {
        case SET_PEOPLE_HANDLER_REQUEST:
            return { ...state, isLoading: true };
        case SET_PEOPLE_HANDLER_SUCCESS:
            return { ...state, peopleData: [...payload], isLoading: false };
        case GET_PEOPLE_DETAIL_REQUEST:
            return { ...state, isLoading: true };
        case GET_PEOPLE_DETAIL_SUCCESS:
            return { ...state, people_detail: [payload], isLoading: false };
        case SEARCH_PEOPLE_REQUEST:
            return { ...state, isLoading: true };
        case SEARCH_PEOPLE_SUCCESS:
            return { ...state, peopleData: [...payload], isLoading: false };
        default:
            return state;
    }
};
export default people;
