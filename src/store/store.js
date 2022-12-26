import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";

// eslint-disable-next-line no-undef
const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers());
export default store;
