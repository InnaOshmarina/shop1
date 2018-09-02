import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, GET_CATEGORIES, GET_CATEGORY } from "./types";

export const getCategoryCreator = (categoriesData) => ({
    type: GET_CATEGORY,
    payload: categoriesData

});

export const addCategoryCreator = categoryData => ({
    type: ADD_CATEGORY,
    payload: categoryData
});

export const getCategoriesCreator = (categoriesData) => ({
    type: GET_CATEGORIES,
    payload: categoriesData

});

export const deleteCategoryCreator = (categoryId) => ({
    type: DELETE_CATEGORY,
    payload: categoryId
});

export const editCategoryCreator = (categoryId) => ({
    type: EDIT_CATEGORY,
    payload: categoryId
});