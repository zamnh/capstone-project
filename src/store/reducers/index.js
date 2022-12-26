import { combineReducers } from "redux";
import hobbyReducer from "./hobby";
import cartReducer from './cart';

const rootReducer = combineReducers({
  hobby: hobbyReducer,
  cart: cartReducer,
});

export default rootReducer;
