import apiHelper, {API_CATEGORIES_URL} from "../helpers/apiHelper";

export const getCategoriesApi = async (queryParams) => {
    return await apiHelper
        .doRequest(`${API_CATEGORIES_URL}`, 'get',
            {
                params: queryParams
            });
};

export const addCategoryApi = async (categoryData) => {
    return  await apiHelper.doRequest(`${API_CATEGORIES_URL}`, 'post', categoryData);
};

export const getCategoryApi = async (id) => {
    return  await apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'get');
};

export const deleteCategoryApi = async (id) => {
    return  await apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'delete');
};

export const editCategoryApi = async (id, categoryData) => {
    return  await apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'post', categoryData);
};