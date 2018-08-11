import { DONE_FAIL_ACTION, DONE_SUCCESS_ACTION, INIT_ACTION } from './types';

export const initAction = (name) => ({
    type: INIT_ACTION,
    name
});

export const doneActionSuccess = (name, message) => ({
    type: DONE_SUCCESS_ACTION,
    name, message
});

export const doneActionFail = (name, errors, message) => ({
    type: DONE_FAIL_ACTION,
    name, errors, message
});