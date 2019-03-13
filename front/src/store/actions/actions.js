import { SET_SEARCH, SET_BOOKSFOUND } from '../constants'

export const setSearch = function (text){
return {
    type: SET_SEARCH,
    text
}
}

export const setBookFound = function (array){
    return {
        type: SET_BOOKSFOUND,
        find: array
    }
}