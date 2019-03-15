import { SET_SHOWMODAL, SET_HIDEMODAL } from '../constants';

const initialState = {
    search: '',
    find: [],
    showModal: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SHOWMODAL: {
            return Object.assign({}, state, { showModal: action.show })
        }
        case SET_HIDEMODAL: {
            return Object.assign({}, state, { showModal: action.hide })
        }
        default:
            return state
    }
}