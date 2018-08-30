import {ADD_TO_CART, DELETE_FROM_CART, DELETE_FORMATION_ORDER, IS_SENT_ORDER, SET_DEFAULT_IS_SENT} from "./types";

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

export const deleteFormationOrderCreator = () => ({
    type: DELETE_FORMATION_ORDER
});

export const isSentOrderCreator = () => ({
    type: IS_SENT_ORDER
});

export const setDefaultIsSentCreator = () => ({
    type: SET_DEFAULT_IS_SENT
});


