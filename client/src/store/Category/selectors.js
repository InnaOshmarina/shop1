import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getCategoryState = state => state.category || initialState;

export const getCategoriesSelector = createSelector(
    getCategoryState,
    (state) => {
        return state.categories;
    }
);

export const getCategoriesLimitSelector = createSelector(
    getCategoriesSelector,
    (state) => {
        return state.limit;
    }
);

export const getCategoriesOffsetSelector = createSelector(
    getCategoriesSelector,
    (state) => {
        return state.offset;
    }
);

export const getCategoriesTotalSelector = createSelector(
    getCategoriesSelector,
    (state) => {
        return state.total;
    }
);

