import axios from 'axios';

import {
    GET_ERRORS,
    GET_PRODUCT,
    GET_PRODUCTS,
    DELETE_PRODUCT
} from './types';

// Create Product
export const addProduct = (productData, history) => dispatch => {
    axios
        .post('/api/products', productData)
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
        .get(`/api/products/${id}`)
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
export const getProducts = () => dispatch => {
    axios
        .get('/api/products')
        .then(res =>
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PRODUCTS,
                payload: []
            })
        );
};

// Delete Product
export const deleteProduct = id => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete(`/api/products/${id}`)
            .then(res =>
                dispatch({
                    type: DELETE_PRODUCT,
                    payload: id
                })
            )
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};

