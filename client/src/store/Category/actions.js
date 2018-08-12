import axios from 'axios';
import { GET_CATEGORY } from './types';
import { GET_CATEGORIES } from './types';
import { baseURL } from "../../constans/GlobalConstans";
import { GET_ERRORS } from "../Auth/types";
import { deleteCategoryCreator, editCategoryCreator, getCategoriesCreator, getCategoryCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";

// Create Category
export const addCategory = (categoryData, history) => async dispatch => {
    try {
        dispatch(initAction());
        await axios.post(`${baseURL}/api/categories`, categoryData);
        history.push('/categories')
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

// Get all categories
export const getCategories = (queryParams = {}) => async dispatch => {
    try {
        dispatch(initAction(getCategoriesCreator().type));
        const categories = await axios.get(`${baseURL}/api/categories`, {params: {...queryParams}});

        dispatch(getCategoriesCreator(categories.data));
        dispatch(doneActionSuccess(getCategoriesCreator().type));
    } catch(err) {
        dispatch({
            // type: GET_ERRORS,
            type: GET_CATEGORIES,
            //payload: err.response.data
            payload: {}
        })
    }
};

// Get category by id
export const getCategory = id => async dispatch => {
    try {
        const category = await axios.get(`${baseURL}/api/categories/${id}`);
        dispatch(getCategoryCreator(category.data))
    } catch(err) {
        dispatch({
            // type: GET_ERRORS,
            type: GET_CATEGORY,
            // payload: err.response.data
            payload: {}
        })
    }
};

// Delete Category
export const deleteCategory = (id, history) => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            await axios.delete(`${baseURL}/api/categories/${id}`);
            dispatch(deleteCategoryCreator(id));
            history.push('/categories');
        } catch(err) {
            dispatch({
                type: GET_ERRORS,
                payload: {}
                //payload: err.response.data
            })
        }
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


