import {createSelector} from "reselect";

import {initialState} from "./reducer";
import {ActionStatus} from "./constants";

export const getActionsState = (state) => state.action || initialState;
export const getActionName = (state, props) => props.name;

export const getActionInfo = createSelector(
    getActionsState,
    getActionName,
    (state, name) => {

        if (state.hasOwnProperty(name)) {
            return state[name];
        }
        return undefined;
    }
);

export const getActionIsPending = createSelector(
    getActionInfo,
    (info) => !!info && info.status === ActionStatus.pending
);

export const getActionIsInProgress = createSelector(
    getActionInfo,
    (info) => !!info && info.status === ActionStatus.inProgress
);
