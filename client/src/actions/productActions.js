import axios from 'axios';

import {
    GET_ERRORS,
    GET_PRODUCT,
    GET_PRODUCTS,
    DELETE_PRODUCT,
    EDIT_PRODUCT
} from './types';

import { baseURL} from "../constans/GlobalConstans";

// Create Product
export const addProduct = (productData, history) => dispatch => {
    axios
        .post(`${baseURL}/api/products`, productData)
        .then(res => history.push('/products'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get product by id
export const getProduct = id => dispatch => {
    axios
        .get(`${baseURL}/api/products/${id}`)
        .then(res =>
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PRODUCT,
                payload: {}
            })
        );
};

// Get all products
export const getProducts = (queryParams = {}) => async dispatch => {
    try {
        const products = await axios.get(`${baseURL}/api/products`, {params: {...queryParams}});

        dispatch({
            type: GET_PRODUCTS,
            payload: products.data
        });
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

// Delete Product
export const deleteProduct = id => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete(`${baseURL}/api/products/${id}`)
            .then(res =>
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: id
                })
            )
            .catch(err => {
                console.log(err.response);
                // TODO refactoring after adding axiosClient
                return dispatch({
                    type: GET_ERRORS,
                    payload: {}
                })
                }
            );
    }
};

// Edit Product
export const editProduct = (id, productData, history) => dispatch => {
    axios
        .post(`${baseURL}/api/products/${id}`, productData)
        .then(res =>
            dispatch({
                type: EDIT_PRODUCT,
                payload: id
            })
        )
        .then(res => history.push('/products'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

