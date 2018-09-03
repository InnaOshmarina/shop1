import {
    addToCartCreator,
    deleteFromCartCreator,
    deleteFormationOrderCreator,
    isSentOrderCreator,
    setDefaultIsSentCreator,
    addInfoBuyerCreator
} from "./actionCreators";

import { doneActionSuccess, initAction } from "../Action/actionCreators";
import {GET_ERRORS} from "../Error/types";
import {createNotification} from "../../helpers/NotificationsHelper";

// Add product to basket
export const addToCart = (product, quantity) => dispatch => {
    dispatch(initAction(addToCartCreator().type));

    dispatch(addToCartCreator(product, quantity));

    dispatch(doneActionSuccess(addToCartCreator().type));
};

// Delete product from cart
export const deleteFromCart = id => dispatch => {
    if (window.confirm('Are you sure you want to remove the product from your basket?')) {
        dispatch(initAction(deleteFromCartCreator().type));

        dispatch(deleteFromCartCreator(id));

        dispatch(doneActionSuccess(deleteFromCartCreator().type));
    }
};

// Add info about the buyer
export const addInfoBuyer = buyerData => async dispatch => {
    try {
        dispatch(initAction(addInfoBuyerCreator().type));

        dispatch(addInfoBuyerCreator(buyerData));

        dispatch(doneActionSuccess(addInfoBuyerCreator().type));
        createNotification('success', 'Your contact details are confirmed.');
    } catch(err) {
        createNotification('error', 'The field is blank or filled out incorrectly');
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

// Delete formation of order
export const deleteFormationOrder = () => dispatch => {
    dispatch(initAction(deleteFormationOrderCreator().type));

    dispatch(deleteFormationOrderCreator());

    dispatch(doneActionSuccess(deleteFormationOrderCreator().type));
};


export const isSentOrder = () => dispatch => {
    dispatch(initAction(isSentOrderCreator().type));

    dispatch(isSentOrderCreator());

    dispatch(doneActionSuccess(isSentOrderCreator().type));
};


export const setDefaultIsSent = () => dispatch => {
    dispatch(initAction(setDefaultIsSentCreator().type));

    dispatch(setDefaultIsSentCreator());

    dispatch(doneActionSuccess(setDefaultIsSentCreator().type));
};



