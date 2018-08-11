import {
    DONE_FAIL_ACTION, DONE_SUCCESS_ACTION, INIT_ACTION
} from './types';
import { ActionStatus } from "./constants";

export const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case INIT_ACTION:
            return {
                ...state,
                [action.name]: {
                    ...action,
                    status: ActionStatus.inProgress,
                    errors: []
                }
            };
        case DONE_SUCCESS_ACTION:
            return {
                ...state,
                [action.name]: {
                    ...action,
                    status: ActionStatus.success,
                    errors: []
                }
            };
        case DONE_FAIL_ACTION:
            return {
                ...state,
                [action.name]: {
                    ...action,
                    status: ActionStatus.fail
                }
            };
        default:
            return state;
    }
};
