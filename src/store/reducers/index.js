import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import successReducer from "./successReducer";

const rootReducer = combineReducers({
    success: successReducer,
    errors: errorReducer
});

export default rootReducer;