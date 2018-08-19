import React from 'react';
import PropTypes from 'prop-types';
import '../../css/NotFound.css';

const NotFound = ({data, message}) => {
    let content = (
            <div className="mt-5 alert alert-info" role="alert">
                <p className="not-found">{message}</p>
            </div>
        );

    return (
        (data.length <= 0) ? content : null
    );
};

NotFound.propTypes = {
    data: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired
};

export default NotFound;