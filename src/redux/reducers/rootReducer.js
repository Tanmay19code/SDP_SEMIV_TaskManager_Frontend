import { combineReducers } from "redux";
import authReducer from "./authReducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;