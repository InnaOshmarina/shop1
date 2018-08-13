import apiHelper from '../../helpers/apiHelper';
import { GET_ERRORS } from "../Auth/types";
import { deleteCategoryCreator, editCategoryCreator, getCategoriesCreator, addCategoryCreator, getCategoryCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";
import {API_CATEGORIES_URL} from "../../helpers/apiHelper";
import {addCategoryApi, getCategoriesApi, getCategoryApi} from "../../api/categories";

// Create Category
export const addCategory = (categoryData, history) => async dispatch => {
    try {
        dispatch(initAction(addCategoryCreator().type));

        await addCategoryApi(categoryData);

        dispatch(doneActionSuccess(addCategoryCreator().type));
        history.push('/categories');
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

        const categories = await getCategoriesApi(queryParams);

        dispatch(getCategoriesCreator(categories.data));
        dispatch(doneActionSuccess(getCategoriesCreator().type));
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

// Get category by id
export const getCategory = id => async dispatch => {
    try {
        dispatch(initAction(getCategoryCreator().type));

        const category = await getCategoryApi(id);

        dispatch(getCategoryCreator(category.data));
        dispatch(doneActionSuccess(initAction(getCategoryCreator().type)));
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};

// Delete Category
export const deleteCategory = id => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            dispatch(initAction(deleteCategoryCreator().type));

            await apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'delete');
            dispatch(deleteCategoryCreator(id));
            dispatch(doneActionSuccess(deleteCategoryCreator().type));
        } catch(err) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    }
};

// Edit Category
export const editCategory = (id, categoryData, history) => async dispatch => {
    try {
        dispatch(initAction(deleteCategoryCreator().type));

        await apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'post', categoryData);

        dispatch(editCategoryCreator(id));
        dispatch(doneActionSuccess(deleteCategoryCreator().type));
        history.push('/categories');
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};


