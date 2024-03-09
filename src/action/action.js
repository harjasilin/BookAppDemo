import { BOOK, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "./type";

export const importBook = (bookId) => {
    return {
        type: BOOK,
        payload: bookId,
    };
};
export const addToFavorite = (bookId) => {
    return {
        type: ADD_TO_FAVORITE,
        payload: bookId,
    }
};
export const removeFromFavorite = (bookId) => {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: bookId,
    }
};