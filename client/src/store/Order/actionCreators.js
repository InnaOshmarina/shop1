import { CHECKOUT, GET_ORDER, GET_ORDERS } from "./types";

export const checkoutCreator = (orderData) => ({
    type: CHECKOUT,
    payload: orderData
});

export const getOrderCreator = (orderData) => ({
    type: GET_ORDER,
    payload: orderData

});

export const getOrdersCreator = (ordersData) => ({
    type: GET_ORDERS,
    payload: ordersData
});

