import {
    GET_DATA_DASHBOARD,
    GET_DATA_CHART
} from './types';

export const initialState = {
    products: 0,
    categories: 0,
    orders: 0,
    chartData: []
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

        case GET_DATA_CHART:

            return {
                ...state,
                chartData: action.payload
            };

        default:
            return state;
    }
}

