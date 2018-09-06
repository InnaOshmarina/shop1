import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getDashboardState = state => state || initialState;

export const getDashboardSelector = createSelector(
    getDashboardState,
    state => state
);

export const getDashboardCategoriesSelector = createSelector(
    getDashboardSelector,
    state => state.categories
);

export const getDashboardProductsSelector = createSelector(
    getDashboardSelector,
    state => state.products
);

export const getDashboardOrdersSelector = createSelector(
    getDashboardSelector,
    state => state.orders
);

// export const getDashboardState = state => state.dashboard || initialState;
//
// export const getDashboardSelector = createSelector(
//     getDashboardState,
//     state => state.dashboard
// );
//
// export const getDashboardCategoriesSelector = createSelector(
//     getDashboardSelector,
//     state => state.categories
// );
//
// export const getDashboardProductsSelector = createSelector(
//     getDashboardSelector,
//     state => state.products
// );
//
// export const getDashboardOrdersSelector = createSelector(
//     getDashboardSelector,
//     state => state.orders
// );