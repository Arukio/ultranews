import { FETCHING_NEWS, FETCH_SUCCESS } from "../actions/news";

const initialState = {
  news: {},
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NEWS:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
    default:
      return state;
  }
};
