import {
    GET_PRODUCT,
    GET_PRODUCTS,
    DELETE_PRODUCT
} from '../actions/types';

export const initialState = {
    product: {},
    products: {
        docs: [],
        total: 0,
        limit: 0,
        offset: 0
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            };
        default:
            return state;
    }
}
