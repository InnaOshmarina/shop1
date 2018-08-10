import { createSelector } from 'reselect';

import { initialState } from '../reducers/categoryReducer';

export const getCategoryState = (state) => state.category || initialState;

export const getCategoriesSelector = createSelector(
    getCategoryState,
    (state) => {
        return state.categories;
    }
);

export const getCategoriesLimitSelector = createSelector(
    getCategoryState,
    (state) => {
        return state.limit;
    }
);

export const getCategoriesOffsetSelector = createSelector(
    getCategoryState,
    (state) => {
        return state.offset;
    }
);

export const getCategoriesTotalSelector = createSelector(
    getCategoryState,
    (state) => {
        return state.total;
    }
);