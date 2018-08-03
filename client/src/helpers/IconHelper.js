import React from 'react';
import { SORTACTION } from "../constans/GlobalConstans";

export const SortActions = (item, icon) => {
    // let icon = null;
    // let link = null;
    // let action = null;
    let answer = item;
    switch (icon) {
        case SORTACTION.eye:
            answer = <button type="button" className="btn btn-primary btn-sm"><i className="far fa-eye" /></button>;
            break;
        case SORTACTION.pencil:
            answer = <button type="button" className="btn btn-primary btn-sm"><i className="far fa-edit" /></button>;
            break;
        case SORTACTION.trashBin:
            answer = <button type="button" className="btn btn-danger btn-sm"><i className="far fa-trash-alt" /></button>;
            break;
        default:
            answer = item;
    }
    return answer;
};