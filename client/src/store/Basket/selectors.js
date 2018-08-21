import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getBasketState = state => state.basket || initialState;

export const getBasketSelector = createSelector(
    getBasketState,
    state => state.docs
);
