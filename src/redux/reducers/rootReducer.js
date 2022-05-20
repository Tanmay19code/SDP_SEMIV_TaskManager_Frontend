import { combineReducers } from "redux";
import authReducer from "./authReducers/authReducer";
import taskReducer from "./authReducers/taskReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer 
});

export default rootReducer;