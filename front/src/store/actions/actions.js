import { SET_SHOWMODAL, SET_HIDEMODAL, SET_LOGIN } from '../constants'

export const setShowModal = function (){
return {
    type: SET_SHOWMODAL,
    show: true
}
}

export const setHideModal = function (){
    return {
        type: SET_HIDEMODAL,
        hide: false
    }
}

export const setLogin = function (){
    return {
        type: SET_LOGIN,
        login: true
    }
}

