import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from "redux/src/compose";

import { getCategories } from "../../store/Category/actions";
import { getCategoriesSelector } from "../../store/Category/selectors";

import { getProducts } from "../../store/Product/actions";
import {getProductsSelector} from "../../store/Product/selectors";

import Search from "../shared/Search";
import Filter from "../../decorators/Filter";
import SpecificProducts from "./SpecificProducts";

import '../../css/ProductCatalog.css';


class ProductCatalog extends Component {

    state = {
        active: ''
    };

    componentDidMount() {
        this.props.getCategories();
    }

    handleClick = (event, id) => {
        event.preventDefault();
        this.setState({active: id});

        this.props.getData({category: id});
        console.log(id);
    };

    render() {

        const { categories, products } = this.props;

        let listCategories = (
            categories.docs.map((category, index) => {
                let active = '';

                if(category._id === this.state.active) {
                    active = 'active-category';
                }
                return (
                    <a
                        key={index}
                        // href={`/${category._id}`}
                        onClick={(event) => this.handleClick(event, category._id)}
                        className={`list-group-item list-group-item-action ${active}`}>
                        {category.title}
                    </a>
                )
            })
        );

        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="caption-category">Select the desired product category:</div>
                    <div className="list-group">
                        {listCategories}
                    </div>
                </div>
                <div className="col-md-9">
                    <Search handleFilterChange={this.props.handleFilterChange} />
                    <SpecificProducts products={products} />
                </div>
            </div>
        );
    }
}

ProductCatalog.propTypes = {
    getCategories: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    products: getProductsSelector(state)
});

const mapDispatchToProps = {
    getCategories,
    getData: getProducts
};

const defaultFilter = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (component) => Filter(component, defaultFilter)
)(ProductCatalog);
