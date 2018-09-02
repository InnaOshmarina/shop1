import { combineReducers } from 'redux';
import authReducer from './Auth/reducer';
import errorReducer from "./Error/reducer";
import categoryReducer from "./Category/reducer";
import productReducer from "./Product/reducer";
import actionsReducer from "./Action/reducer";
import basketReducer from "./Basket/reducer";
import orderReducer from "./Order/reducer";

export default combineReducers({
    auth: authReducer,
    action: actionsReducer,
    errors: errorReducer,
    category: categoryReducer,
    product: productReducer,
    basket: basketReducer,
    order: orderReducer
});