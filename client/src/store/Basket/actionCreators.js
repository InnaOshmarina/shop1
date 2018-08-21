import { ADD_TO_CART, DELETE_FROM_CART } from "./types";

export const addToCartCreator = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const deleteFromCartCreator = id => ({
    type: DELETE_FROM_CART,
    payload: id
});


