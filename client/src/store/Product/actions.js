import {GET_ERRORS} from "../Error/types";
import { deleteProductCreator, editProductCreator, getProductsCreator, addProductCreator, getProductCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";
import {addProductApi, getProductsApi, getProductApi, deleteProductApi, editProductApi} from "../../api/products";


// Create Product
export const addProduct = (productData, history) => async dispatch => {
    try {
        dispatch(initAction(addProductCreator().type));

        await addProductApi(productData);

        dispatch(doneActionSuccess(addProductCreator().type));
        history.push('/products');
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            //payload: err.response.data
            payload: {}
        })
    }
};

// Get all products
export const getProducts = (queryParams = {}) => async dispatch => {
    try {
        dispatch(initAction(getProductsCreator().type));
        const products = await getProductsApi(queryParams);

        dispatch(getProductsCreator(products.data));
        dispatch(doneActionSuccess(getProductsCreator().type));
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    }
};

// Get product by id
export const getProduct = id => async dispatch => {
    try {
        dispatch(initAction(getProductCreator().type));

        const product = await getProductApi(id);

        dispatch(getProductCreator(product.data));
        dispatch(doneActionSuccess(initAction(getProductCreator().type)));

    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            // payload: err.response.data
            payload: {}
        })
    }
};

// Delete Product
export const deleteProduct = id => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            dispatch(initAction(deleteProductCreator().type));

            await deleteProductApi(id);

            dispatch(deleteProductCreator(id));
            dispatch(doneActionSuccess(deleteProductCreator().type));
        } catch(err) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    }
};

// Edit Product
export const editProduct = (id, productData, history) => async dispatch => {
    try {
        dispatch(initAction(editProductCreator().type));

        await editProductApi(id, productData);

        dispatch(editProductCreator(id));
        dispatch(doneActionSuccess(editProductCreator().type));
        history.push('/products');
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

