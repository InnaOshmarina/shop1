import { combineReducers } from 'redux';
import authReducer from './Auth/reducer';
import errorReducer from "./Error/reducer";
import categoryReducer from "./Category/reducer";
import productReducer from "./Product/reducer";

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    category: categoryReducer,
    product: productReducer
});