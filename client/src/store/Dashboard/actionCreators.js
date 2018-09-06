import { GET_DATA_DASHBOARD } from "./types";

export const dashboardCreator = (dashboardData) => ({
    type: GET_DATA_DASHBOARD,
    payload: dashboardData
});

