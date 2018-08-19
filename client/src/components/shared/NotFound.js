import React from 'react';
import PropTypes from 'prop-types';

const NotFound = props => {
    const data = props.products;
    let content;

    if (data.docs.length <= 0) {
        content = (
            <p>{props.message}</p>
        );
    }

    return (
        <div className="mt-5">
            {content}
        </div>
    );
};

NotFound.propTypes = {
    products: PropTypes.object.isRequired
};

NotFound.defaultProps = {
    message: 'Products in this category will be available soon'
};

export default NotFound;