import {GET_ERRORS} from "../Error/types";
import { dashboardCreator } from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";
import {getDashboardApi} from "../../api/dashboard";


// Get all categories for dashboard
export const getCountItems = (queryParams = {}) => async dispatch => {
    try {
        dispatch(initAction(dashboardCreator().type));

        const items = await getDashboardApi(queryParams);

        dispatch(dashboardCreator(items.data));

        dispatch(doneActionSuccess(dashboardCreator().type));
    }
    catch(err) {
        dispatch({
            type: GET_ERRORS,
            //payload: err.response.data
            payload: {}
        })
    }
};


