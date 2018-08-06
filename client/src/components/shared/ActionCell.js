import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {SORTACTION} from "../../constans/GlobalConstans";
import {getLinkTemplate} from "../../helpers/GlobalHelper";
import '../../css/ActionCell.css';

const ActionCell = (props) => {

    const { operation, row } = props;
    let answer = '';

    // Формирование иконки
    let currentIcon = '';
    switch (operation.options.icon) {
        case SORTACTION.eye:
            currentIcon = "far fa-eye";
            break;
        case SORTACTION.pencil:
            currentIcon = "far fa-edit";
            break;
        case SORTACTION.trashBin:
            currentIcon = "far fa-trash-alt";
            break;
    }

    const iconContent = (
           <i className={currentIcon} />
    );

    if(operation.options.type === SORTACTION.link) {
        const linkTemplate = getLinkTemplate(operation.options.linkTemplate, row);
        answer = <Link to={linkTemplate} className="link">{iconContent}</Link>;
    }

    if(operation.options.type === SORTACTION.action) {
        answer = <span className="action" onClick={() => operation.options.actionFunction(row)}>{iconContent}</span>;
    }

    return answer;
};

ActionCell.propTypes = {
    operation: PropTypes.object.isRequired,
    row: PropTypes.object.isRequired
};

export default ActionCell;
