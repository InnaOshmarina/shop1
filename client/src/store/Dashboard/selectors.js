import { createSelector } from 'reselect';

import { initialState } from './reducer';

export const getDashboardState = state => state.dashboard || initialState;

export const getCategoriesCountSelector = createSelector(
    getDashboardState,
    state => state.categories
);


export const getProductsCountSelector = createSelector(
    getDashboardState,
    state => state.products
);


export const getOrdersCountSelector = createSelector(
    getDashboardState,
    state => state.orders
);


export const getChartDataSelector = createSelector(
    getDashboardState,
    state => {
        let labels = [];
        let data = [];

        state.chartData.forEach(item => {
           if(item.products.length > 0) {
               labels.push(item.title);
               data.push(item.products.length);
           }
        });
        return {
            labels,
            data
        }
    }
);