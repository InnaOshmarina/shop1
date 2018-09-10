import { GET_ERRORS } from "../Error/types";
import { deleteCategoryCreator, editCategoryCreator, getCategoriesCreator, addCategoryCreator, getCategoryCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";
import {addCategoryApi, getCategoriesApi, getCategoryApi, deleteCategoryApi, editCategoryApi} from "../../api/categories";

// Create Category
export const addCategory = (categoryData, history) => async dispatch => {
    try {
        dispatch(initAction(addCategoryCreator().type));

        await addCategoryApi(categoryData);

        dispatch(doneActionSuccess(addCategoryCreator().type));
        history.push('/categories');
    }
    catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: {}
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
            payload: {}
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
            payload: err
        })
    }
};

// Delete Category
export const deleteCategory = id => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            dispatch(initAction(deleteCategoryCreator().type));

            await deleteCategoryApi(id);
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
        dispatch(initAction(editCategoryCreator().type));

        await editCategoryApi(id, categoryData);

        dispatch(editCategoryCreator(id));
        dispatch(doneActionSuccess(editCategoryCreator().type));
        history.push('/categories');
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
};


