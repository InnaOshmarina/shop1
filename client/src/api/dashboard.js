import apiHelper, { API_DASHBOARD_URL, API_CHART_URL } from "../helpers/apiHelper";

export const getDashboardApi = async (queryParams) => {
    return await apiHelper
        .doRequest(`${API_DASHBOARD_URL}`, 'get',
            {
                params: queryParams
            });
};


export const getChartApi = async (queryParams) => {
    return await apiHelper
        .doRequest(`${API_CHART_URL}`, 'get',
            {
                params: queryParams
            });
};