import {
    GET_PEOPLE_DETAIL_REQUEST,
    GET_PEOPLE_DETAIL_SUCCESS,
    SET_PEOPLE_HANDLER_REQUEST,
    SET_PEOPLE_HANDLER_SUCCESS,
} from '../actions/peopleActions';

const intialValue = {
    peopleData: [],
    people_detail: [],
};

const people = (state = intialValue, { payload, type }) => {
    switch (type) {
        case SET_PEOPLE_HANDLER_REQUEST:
            return { ...state };
        case SET_PEOPLE_HANDLER_SUCCESS:
            return { ...state, peopleData: [...payload, ...state.peopleData] };
        case GET_PEOPLE_DETAIL_REQUEST:
            return { ...state };
        case GET_PEOPLE_DETAIL_SUCCESS:
            return { ...state, people_detail: [payload] };
        default:
            return state;
    }
};
export default people;
