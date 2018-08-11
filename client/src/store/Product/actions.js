import axios from 'axios';
import { GET_PRODUCT } from './types';
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

// Get product by id
export const getProduct = id => dispatch => {
    axios
        .get(`${baseURL}/api/products/${id}`)
        .then(res =>
            dispatch(getProductCreator(res.data))
        )
        .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            // dispatch({
            //     type: GET_PRODUCT,
            //     payload: {}
            // })
        );
};


                  // НЕ УДАЛЯТЬ!!! ЭТО НУЖНО !!!
// Get all products
// export const getProducts = (queryParams = {}) => async dispatch => {
//     try {
//         const products = await axios.get(`${baseURL}/api/products`, {params: {...queryParams}});
//
//         dispatch({
//             type: GET_PRODUCTS,
//             payload: products.data
//         });
//     } catch(err) {
//         dispatch({
//             type: GET_ERRORS,
//             payload: err.response.data
//         })
//     }
// };

// Get all products
export const getProducts = (queryParams = {}) => dispatch => {
    dispatch(initAction(getProductsCreator().type));
    axios
        .get(`${baseURL}/api/products`, {
            params: {
                ...queryParams
            }
        })
        .then(res => {
                dispatch(getProductsCreator(res.data))
            }
        )
        .then(() => {
            dispatch(doneActionSuccess(getProductsCreator().type));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete Product
export const deleteProduct = id => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete(`${baseURL}/api/products/${id}`)
            .then(() =>
                dispatch(deleteProductCreator(id))
            )
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                    // payload: {}
                })
                }
            );
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

