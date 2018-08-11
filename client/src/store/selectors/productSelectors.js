import { createSelector } from 'reselect';

import { initialState } from '../reducers/productReducer';

export const getProductState = state => state.product || initialState;

export const getProductsSelector = createSelector(
    getProductState,
    state => state.products
);

export const getProductsLimitSelector = createSelector(
    getProductState,
    state => state.limit
);

export const getProductsOffsetSelector = createSelector(
    getProductState,
    state => state.offset
);

export const getProductsTotalSelector = createSelector(
    getProductState,
    state => state.total
);