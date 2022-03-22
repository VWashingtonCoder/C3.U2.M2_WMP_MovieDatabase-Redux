import { 
    TOGGLE_FAVORITES, ADD_FAVORITE, removeFavorite
} from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer