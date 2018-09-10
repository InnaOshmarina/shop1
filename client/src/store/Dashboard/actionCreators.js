import { GET_DATA_DASHBOARD, GET_DATA_CHART } from "./types";

export const dashboardCreator = dashboardData => ({
    type: GET_DATA_DASHBOARD,
    payload: dashboardData
});


export const chartDataCreator = chartData => ({
    type: GET_DATA_CHART,
    payload: chartData
});

