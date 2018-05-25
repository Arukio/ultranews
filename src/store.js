import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import news from "./reducers/news";

const rootReducer = combineReducers({
  news
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
