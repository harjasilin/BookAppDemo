import { ADD_REVIEW} from "./type";

export const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review,
  });