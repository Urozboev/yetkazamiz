import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;