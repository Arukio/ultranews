import { OPEN_URL, CLOSE_URL } from "../actions/news";

const initialState = {
  showModal: false,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_URL:
      return {
        ...state,
        showModal: true,
        data: action.payload.data
      };
    case CLOSE_URL:
      return {
        ...state,
        showModal: false,
        data: {}
      };
    default:
      return state;
  }
};
