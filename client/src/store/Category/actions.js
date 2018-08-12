import axios from 'axios';
import apiHelper from '../../helpers/apiHelper';
import { baseURL } from "../../constans/GlobalConstans";
import { GET_ERRORS } from "../Auth/types";
import { deleteCategoryCreator, editCategoryCreator, getCategoriesCreator, getCategoryCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";
import {API_CATEGORIES_URL} from "../../helpers/apiHelper";
import {getProductsCreator} from "../Product/actionCreators";

// Create Category
export const addCategory = (categoryData, history) => dispatch => {
  dispatch(initAction());
    apiHelper.doRequest(`${baseURL}/api/categories`, 'post', categoryData)
    .then(() => history.push('/categories'))
    .catch(err => {
        console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
    }
    );
};

// Get category by id
export const getCategory = id => dispatch => {
    apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'get')
        .then(res =>
            dispatch(getCategoryCreator(res.data))
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Get all categories
export const getCategories = (queryParams = {}) => dispatch => {
    console.log(queryParams);
    dispatch(initAction(getCategoriesCreator().type));
    apiHelper
        .doRequest(
            `${API_CATEGORIES_URL}`,
            'get',
            {
                params: queryParams
            })
        .then(res => {
                dispatch(getCategoriesCreator(res.data))
            }
        )
        .then(() => {
            dispatch(doneActionSuccess(getCategoriesCreator().type));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// export const getFunds = async (firmId: any, filter: any): Promise<any> => {
//     const response = await ApiHelper.doRequest(
//         `${API_ERM_ENTITIES}/relationships/`,
//         'get',
//         {
//             params: {
//                 entity_id: firmId,
//                 end_type: 'firm',
//                 start_type: 'fund',
//                 relationship_type: 'is_advised_by',
//                 ...filter,
//             }
//         }
//     );
//
//     return Promise.resolve(response);
// };

// Delete Category
export const deleteCategory = id => async dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            dispatch(initAction(deleteCategoryCreator().type));

            await apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'delete');

            dispatch(doneActionSuccess(deleteCategoryCreator().type));
        } catch(err) {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
    }
};

// Edit Category
export const editCategory = (id, categoryData, history) => dispatch => {
    apiHelper.doRequest(`${API_CATEGORIES_URL}/${id}`, 'post', categoryData)
            .then(() =>
                dispatch(editCategoryCreator())
            )
            .then(() => history.push('/categories'))
            .catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
};


