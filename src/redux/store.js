import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";
import chatReducer from "./reducers/chatReducer";

const initailState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  UI: uiReducer,
  chat: chatReducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, initailState, enhancer);

export default store;
