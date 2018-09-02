import {
    clearErrorsCreator
} from "./actionCreators";

import { doneActionSuccess, initAction } from "../Action/actionCreators";


export const clearErrors = () => dispatch => {
    dispatch(initAction(clearErrorsCreator().type));

    dispatch(clearErrorsCreator());

    dispatch(doneActionSuccess(clearErrorsCreator().type));
};



