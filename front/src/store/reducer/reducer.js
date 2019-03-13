import { SET_SEARCH, SET_BOOKSFOUND } from '../constants';

const initialState = {
    search: '',
    find: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH: {
            return Object.assign({}, state, { search: action.text })
        }
        case SET_BOOKSFOUND: {
            return Object.assign({}, state, { find: action.find })
        }
        default:
            return state
    }
}