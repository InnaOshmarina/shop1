import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CategoriesList extends Component {
    render() {
        return (
            <div>
                <Link to="/category-adding">
                    <button type="button" className="btn btn-success">Add Category</button>
                </Link>
            </div>
        );
    }
}

CategoriesList.propTypes = {};

export default CategoriesList;
