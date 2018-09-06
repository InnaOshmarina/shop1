import apiHelper, {API_DASHBOARD_URL} from "../helpers/apiHelper";

export const getDashboardApi = async (queryParams) => {
    return await apiHelper
        .doRequest(`${API_DASHBOARD_URL}`, 'get',
            {
                params: queryParams
            });
};