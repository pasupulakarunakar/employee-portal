import authReducer from "./auth";
import { combineReducers } from "redux";

const reducers = combineReducers({
    loggedIn: authReducer
})

export default reducers