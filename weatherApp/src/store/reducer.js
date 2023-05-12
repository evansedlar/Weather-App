
import { createStore } from 'redux'

const initialState = {
    recentSearches: [],
    searchTerm: '',
}



function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_RECENT_SEARCH":
            
            return {
                ...state,
                recentSearches: [...state.recentSearches, action.payload]
            } 
        case "UPDATE_SEARCH_TERM":
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    } 
}

const store = createStore(reducer)

export default reducer