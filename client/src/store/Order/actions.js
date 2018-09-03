import {GET_ERRORS} from "../Error/types";
import { getOrdersCreator, checkoutCreator, getOrderCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";
import { checkoutApi, getOrdersApi, getOrderApi } from "../../api/orders";
import {createNotification} from "../../helpers/NotificationsHelper";
import {deleteFormationOrder, isSentOrder} from "../Basket/actions";


// Create Order
export const checkout = (orderData) => async dispatch => {
    try {
        dispatch(initAction(checkoutCreator().type));

        await checkoutApi(orderData);

        dispatch(doneActionSuccess(checkoutCreator().type));
        createNotification('success', 'Your order is successfully placed!');
        dispatch(isSentOrder());
        dispatch(deleteFormationOrder());
    }
    catch(err) {
        createNotification('error', 'The field is blank or filled out incorrectly');
        dispatch({
            type: GET_ERRORS,
            // payload: err.response.data
            payload: {}
        })
    }
};

// Get all orders
export const getOrders = (queryParams = {}) => async dispatch => {
    try {
        dispatch(initAction(getOrdersCreator().type));
        const orders = await getOrdersApi(queryParams);

        dispatch(getOrdersCreator(orders.data));
        dispatch(doneActionSuccess(getOrdersCreator().type));

    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            // payload: {}
        })
    }
};

// Get order by id
export const getOrder = id => async dispatch => {
    try {
        dispatch(initAction(getOrderCreator().type));

        const order = await getOrderApi(id);

        dispatch(getOrderCreator(order.data));
        dispatch(doneActionSuccess(initAction(getOrderCreator().type)));

    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
           // payload: {}
        })
    }
};


