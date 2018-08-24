import { ADD_TO_CART, DELETE_FROM_CART } from "./types";

export const addToCartCreator = (product, quantity = 1) => ({
    type: ADD_TO_CART,
    payload: {
        product,
        quantity
    }
});

export const deleteFromCartCreator = id => ({
    type: DELETE_FROM_CART,
    payload: id
});


