import apiHelper, {API_ORDERS_URL} from "../helpers/apiHelper";

export const checkoutApi = async (orderData) => {
    return  await apiHelper.doRequest(`${API_ORDERS_URL}`, 'post', orderData);
};

export const getOrdersApi = async (queryParams) => {
    return await apiHelper.doRequest(`${API_ORDERS_URL}`, 'get', { params: queryParams });
};

export const getOrderApi = async (id) => {
    return  await apiHelper.doRequest(`${API_ORDERS_URL}/${id}`, 'get');
};

