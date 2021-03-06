import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getProductState = state => state.product || initialState;

export const getProductsSelector = createSelector(
    getProductState,
    state => state.products
);

export const getProductSelector = createSelector(
    getProductState,
    state => state.product
);

export const getProductsLimitSelector = createSelector(
    getProductsSelector,
    state => state.limit
);

export const getProductsOffsetSelector = createSelector(
    getProductsSelector,
    state => state.offset
);

export const getProductsTotalSelector = createSelector(
    getProductsSelector,
    state => state.total
);

export const getSpecificProductsSelector = createSelector(
    getProductState,
    state => {
        return state.products.docs.map(product => product.category._id)
    }
);