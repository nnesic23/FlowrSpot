import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//reducers
import { flowerReducer } from "./flowerReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  flowerReducer,
  authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
