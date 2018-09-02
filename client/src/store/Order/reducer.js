import {
    CHECKOUT,
    GET_ORDER,
    GET_ORDERS
} from './types';

export const initialState = {
    order: {
        products: [],
        buyer: {}
    },
    orders: {
        docs: [],
        total: 0,
        limit: 0,
        offset: 0
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CHECKOUT:
            return {
                ...state,
                orders: {
                    ...state.orders,
                    docs: [...state.orders.docs, action.payload]
                }
            };
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case GET_ORDER:
            return {
                ...state,
                order: action.payload
            };
        default:
            return state;
    }
}

