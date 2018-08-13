import axios from 'axios';
import {GET_PRODUCT, GET_PRODUCTS} from './types';
import { baseURL} from "../../constans/GlobalConstans";
import {GET_ERRORS} from "../Auth/types";
import { deleteProductCreator, editProductCreator, getProductsCreator, getProductCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";

// Create Product
export const addProduct = (productData, history) => dispatch => {
    dispatch(initAction());
    axios
        .post(`${baseURL}/api/products`, productData)
        .then(() => history.push('/products'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get all products
export const getProducts = (queryParams = {}) => async dispatch => {
    try {
        dispatch(initAction(getProductsCreator().type));
        const products = await axios.get(`${baseURL}/api/products`, {params: {...queryParams}});

        dispatch(getProductsCreator(products.data));
        dispatch(doneActionSuccess(getProductsCreator().type));
    } catch(err) {
        dispatch({
            // type: GET_ERRORS,
            type: GET_PRODUCTS,
            //payload: err.response.data
            payload: {}
        })
    }
};

// Get product by id
export const getProduct = id => async dispatch => {
    try {
        const product = await axios.get(`${baseURL}/api/products/${id}`);
        dispatch(getProductCreator(product.data))

    } catch(err) {
        dispatch({
            //type: GET_ERRORS,
            type: GET_PRODUCT,
            // payload: err.response.data
            payload: {}
        })
    }
};

// Delete Product
export const deleteProduct = id => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            await axios.delete(`${baseURL}/api/products/${id}`);
            dispatch(deleteProductCreator(id))
        } catch(err) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
        }
    }
};

// Edit Product
export const editProduct = (id, productData, history) => dispatch => {
    axios
        .post(`${baseURL}/api/products/${id}`, productData)
        .then(() =>
            dispatch(editProductCreator())
        )
        .then(() => history.push('/products'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

