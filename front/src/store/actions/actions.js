import { SET_SHOWMODAL, SET_HIDEMODAL } from '../constants'

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
