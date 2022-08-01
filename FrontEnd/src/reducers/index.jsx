import { combineReducers } from "redux";
import isLoggedInReducer from "./isLoggedIn";

const allReducers = combineReducers({
    isLoggedIn: isLoggedInReducer,
})

export default allReducers;