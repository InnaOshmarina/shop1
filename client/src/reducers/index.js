import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from "./errorReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    category: categoryReducer,
    product: productReducer
});