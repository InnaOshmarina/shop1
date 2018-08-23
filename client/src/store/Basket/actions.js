
import { addToCartCreator, deleteFromCartCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";


// Add product to basket
export const addToCart = product => dispatch => {
    dispatch(initAction(addToCartCreator().type));

    dispatch(addToCartCreator(product));

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



