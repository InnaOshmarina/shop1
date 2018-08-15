import apiHelper, {API_PRODUCTS_URL} from "../helpers/apiHelper";

export const getProductsApi = async (queryParams) => {
    return await apiHelper
        .doRequest(`${API_PRODUCTS_URL}`, 'get',
            {
                params: queryParams
            });
};

export const addProductApi = async (productData) => {
    return  await apiHelper.doRequest(`${API_PRODUCTS_URL}`, 'post', productData);
};

export const getProductApi = async (id) => {
    return  await apiHelper.doRequest(`${API_PRODUCTS_URL}/${id}`, 'get');
};

export const deleteProductApi = async (id) => {
    return  await apiHelper.doRequest(`${API_PRODUCTS_URL}/${id}`, 'delete');
};

export const editProductApi = async (id, productData) => {
    return  await apiHelper.doRequest(`${API_PRODUCTS_URL}/${id}`, 'post', productData);
};