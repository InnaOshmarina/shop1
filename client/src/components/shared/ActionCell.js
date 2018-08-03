import React from 'react';
import { Link } from 'react-router-dom';
import {SORTACTION} from "../../constans/GlobalConstans";
import {getLinkTemplate} from "../../helpers/GlobalHelper";

const ActionCell = (props) => {

    const { operation, row } = props;
    let answer = '';

    // Формирование иконки
    let currentItem = '';
    switch (operation.options.icon) {
        case SORTACTION.eye:
            currentItem = "far fa-eye";
            break;
        case SORTACTION.pencil:
            currentItem = "far fa-edit";
            break;
        case SORTACTION.trashBin:
            currentItem = "far fa-trash-alt";
            break;
    }

    const iconContent = (
           <i className={currentItem} />
    );

    if(operation.options.type === SORTACTION.link) {
        const linkTemplate = getLinkTemplate(operation.options.linkTemplate, row);
        answer = <Link to={linkTemplate}>{iconContent}</Link>;
    }

    if(operation.options.type === SORTACTION.action) {
        answer = <span onClick={() => operation.options.actionFunction(row._id)}>{iconContent}</span>;
    }

    return answer;
};
export default ActionCell;
