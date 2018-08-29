import { addToCartCreator, deleteFromCartCreator, deleteFormationOrderCreator, isSentOrderCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";

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



