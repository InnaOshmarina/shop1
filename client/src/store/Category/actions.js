import axios from 'axios';
import { GET_CATEGORY, DELETE_CATEGORY } from './types';
import { baseURL} from "../../constans/GlobalConstans";
import {GET_ERRORS} from "../Auth/types";
import {deleteCategoryCreator, editCategoryCreator, getCategoriesCreator, getCategoryCreator} from "./actionCreators";

// Create Category
export const addCategory = (categoryData, history) => dispatch => {
  axios
    .post(`${baseURL}/api/categories`, categoryData)
    .then(() => history.push('/categories'))
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
        .get(`${baseURL}/api/categories/${id}`)
        .then(res =>
            dispatch(getCategoryCreator(res.data))
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
        .get(`${baseURL}/api/categories`, {
            params: {
                ...queryParams
            }
        })
        .then(res => {
                dispatch(getCategoriesCreator(res.data))
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
            .delete(`${baseURL}/api/categories/${id}`)
            .then(() =>
                dispatch(deleteCategoryCreator(id))
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
            .post(`${baseURL}/api/categories/${id}`, categoryData)
            .then(() =>
                dispatch(editCategoryCreator())
            )
            .then(() => history.push('/categories'))
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
};


