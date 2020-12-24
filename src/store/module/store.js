import { combineReducers } from "redux";
import CountryReducer from "./tableReducers";

const rootReducer = combineReducers({
  CountryReducer
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});

export default rootReducer;