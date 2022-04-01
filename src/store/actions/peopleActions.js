export const SET_PEOPLE_HANDLER_REQUEST = 'SET_PEOPLE_HANDLER_REQUEST';
export const SET_PEOPLE_HANDLER_SUCCESS = 'SET_PEOPLE_HANDLER_SUCCESS';
export const GET_PEOPLE_DETAIL_REQUEST = 'GET_PEOPLE_DETAIL_REQUEST';
export const GET_PEOPLE_DETAIL_SUCCESS = 'GET_PEOPLE_DETAIL_SUCCESS';

export const setPeopleRequest = () => {
    return {
        type: SET_PEOPLE_HANDLER_REQUEST,
    };
};
export const setPeopleSuccess = (people) => {
    return {
        type: SET_PEOPLE_HANDLER_SUCCESS,
        payload: people,
    };
};
export const getPeopleDetialRequest = (id) => {
    return {
        type: GET_PEOPLE_DETAIL_REQUEST,
        payload: id,
    };
};
export const getPeopleDetialSuccess = (people_detail) => {
    return {
        type: GET_PEOPLE_DETAIL_SUCCESS,
        payload: people_detail,
    };
};
