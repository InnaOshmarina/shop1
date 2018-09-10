import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../css/CardItems.css';

const CardItems = ({color, icon, data, text, path, colorLink}) => {
    return (
        <div className={`card ${color} dashboard-allItems`}>
            <div className="card-body text-white d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <i className={icon} />
                </div>
                <div>
                    <p className="allItems text-right mb-0">{data}</p>
                    <p className="mb-0">{text}</p>
                </div>
            </div>
            <Link to={path} style={{color: `${colorLink}`}} className="card-items-link">
                <div className="card-footer allItems-footer">View Details</div>
            </Link>
        </div>
    );
};

CardItems.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    data: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    colorLink: PropTypes.string
};

CardItems.defaultProps = {
    color: `bg-primary`
};

export default CardItems;