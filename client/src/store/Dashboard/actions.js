import {GET_ERRORS} from "../Error/types";
import {chartDataCreator, dashboardCreator} from "./actionCreators";
import { doneActionSuccess, initAction } from "../Action/actionCreators";
import {getChartApi, getDashboardApi} from "../../api/dashboard";


// Get all items for dashboard
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


// Get array data for chart
export const getChartData = queryParams => async dispatch => {
    try {
        dispatch(initAction(chartDataCreator().type));

        const chartData = await getChartApi(queryParams);

        dispatch(chartDataCreator(chartData.data));

        dispatch(doneActionSuccess(chartDataCreator().type));
    }
    catch(err) {
        dispatch({
            type: GET_ERRORS,
            //payload: err.response.data
            payload: []
        })
    }
};


