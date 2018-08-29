import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getBasketState = state => state.basket || initialState;

export const getBasketSelector = createSelector(
    getBasketState,
    state => state.docs
);

export const getBasketTotalQuantitiesSelector = createSelector(
    getBasketState,
    state => state.totalQuantities
);

export const getBasketTotalAmountSelector = createSelector(
    getBasketState,
    state => state.totalAmount
);

export const getBasketIsSentSelector = createSelector(
    getBasketState,
    state => state.isSent
);
