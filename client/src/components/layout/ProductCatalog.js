import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
    getCategoriesSelector
} from "../../store/Category/selectors";

import '../../css/ProductCatalog.css';
import {getCategories} from "../../store/Category/actions";
import SpecificProducts from "../product/SpecificProducts";

const style1 = {
    color: '#000',
    backgroundColor: 'rgb(203, 221, 212)',
    borderBottomColor: 'rgb(203, 221, 212)'
};

class ProductCatalog extends Component {

    render() {
        const { categories } = this.props;

        let ListCategories = (
            categories.docs.map((category, index) => {
                return (
                    <div className="list-group" key={index}>
                        <NavLink
                                 to="/specific-products"
                                 activeStyle={style1}
                                 className="list-group-item list-group-item-action">
                            {category.title}
                        </NavLink>
                    </div>
                )
            })
        );
        return (
            <Router>
                <div className="product-catalog">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="caption-category">Select the desired product category:</div>
                                {ListCategories}
                            </div>
                            <div className="col-md-9">
                                <Route exact path="/specific-products" component={SpecificProducts} />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

ProductCatalog.propTypes = {
    getData: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state)
});

const mapDispatchToProps = {
    getData: getCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog);
