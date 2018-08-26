import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getOrderState = state => state.order || initialState;

export const getOrdersSelector = createSelector(
    getOrderState,
    state => state.orders
);

export const getOrderSelector = createSelector(
    getOrderState,
    state => state.order
);

export const getOrdersLimitSelector = createSelector(
    getOrdersSelector,
    state => state.limit
);

export const getOrdersOffsetSelector = createSelector(
    getOrdersSelector,
    state => state.offset
);

export const getOrdersTotalSelector = createSelector(
    getOrdersSelector,
    state => state.total
);