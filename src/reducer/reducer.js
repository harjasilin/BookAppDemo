import {
    BOOK,ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, 
} from '../action/type';
const initialState = {
    books: [],
    favorites: [],
    
};
const bookReducer = (state = initialState, action) => {
    switch (action.type) {

        case BOOK:
            return {
                ...state,
                books: action.payload
            }
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: (state.favorites || []).concat(action.payload)
            }
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((bookId) => bookId !== action.payload),
            };
        
        default:
            return state;
    }
}
export default bookReducer;