import axios from "axios";

const API_URL = "https://newsapi.org/v2/top-headlines?";
const API_KEY = "9d8d580cf4be49c4a9a82a59ec31087f";

export const FETCH_NEWS = "FETCH_NEWS";
export const FETCHING_NEWS = "FETCHING_NEWS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchingNews = () => ({
  type: FETCH_NEWS
});

export const fetchSuccess = id => ({
  type: FETCH_SUCCESS,
  payload: {
    data
  }
});

export const fetchNews = param => {
  return async dispatch => {
    dispatch(fetchingNews());
    try {
      const result = await axios.get(API_URL, {
        headers: { "X-Api-Key": API_KEY }
      });
      dispatch(fetchSuccess(result.data));
      return result.data;
    } catch (e) {
      console.log(e);
    }
  };
};
