import React from 'react';
import PropTypes from 'prop-types';

const SortIcon = ({ headerName, sort }) => {
    let answer = null;

    if(sort[headerName]) {
        answer = <i className="arrow arrow-down"/>;

        if(sort[headerName] === 1) {
            answer =  <i className="arrow arrow-up"/>;
        }
    }

    return answer;

};

SortIcon.propTypes = {
    headerName: PropTypes.string.isRequired,
};

export default SortIcon;