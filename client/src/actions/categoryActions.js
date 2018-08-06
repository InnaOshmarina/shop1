import axios from 'axios';
import { initialState } from '../reducers/categoryReducer';
import {GET_ERRORS, GET_CATEGORY, GET_CATEGORIES, DELETE_CATEGORY, EDIT_CATEGORY} from './types';

// Create Category
export const addCategory = (categoryData, history) => dispatch => {
  axios
    .post('/api/categories', categoryData)
    .then(res => history.push('/categories'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get category by id
export const getCategory = id => dispatch => {
    axios
        .get(`/api/categories/${id}`)
        .then(res =>
            dispatch({
                type: GET_CATEGORY,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_CATEGORY,
                payload: {}
            })
        );
};

// Get all categories
export const getCategories = (queryParams = {}) => dispatch => {
    axios
        .get('/api/categories', {
            params: queryParams
        })
        .then(res => {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: res.data
                })
            }
        )
        .catch(err => {
                // dispatch({
                //     type: GET_CATEGORIES,
                //     payload: initialState
                // });
            console.log('error');
        }
        );
};

// Delete Category
export const deleteCategory = id => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete(`/api/categories/${id}`)
            .then(res =>
                dispatch({
                    type: DELETE_CATEGORY,
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

// Edit Category
export const editCategory = (id, categoryData, history) => dispatch => {
        axios
            .post(`/api/categories/${id}`, categoryData)
            .then(res =>
                dispatch({
                    type: EDIT_CATEGORY,
                    payload: id
                })
            )
            .then(res => history.push('/categories'))
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
};


