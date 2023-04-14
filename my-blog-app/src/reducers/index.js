import { combineReducers } from "redux";
import blogReducer from "./blogReducers";

const rootReducer = combineReducers({
  blogs: blogReducer,
});

export default rootReducer;
