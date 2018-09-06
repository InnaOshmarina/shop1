import {
    GET_DATA_DASHBOARD
} from './types';

export const initialState = {
    products: 0,
    categories: 0,
    orders: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_DASHBOARD:
            return {
                ...state,
                categories: action.payload.categories,
                products: action.payload.products,
                orders: action.payload.orders
            };
        default:
            return state;
    }
}

