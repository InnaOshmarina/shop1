import {
    ADD_TO_CART,
    DELETE_FROM_CART
} from './types';

export const initialState = {
    docs: []
};

export default function(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                docs: [...state.docs, action.payload]
            };
        case DELETE_FROM_CART:
            return {
                ...state,
                docs: state.docs.filter(product => product._id !== action.payload)
            };
        default:
            return state;
    }
}
