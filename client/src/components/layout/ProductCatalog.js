import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCategoriesSelector } from "../../store/Category/selectors";
import { getCategories } from "../../store/Category/actions";
import {getProductsSelector} from "../../store/Product/selectors";
import { getProducts } from "../../store/Product/actions";
import SpecificProducts from "../product/SpecificProducts";
import '../../css/ProductCatalog.css';
import compose from "redux/src/compose";
import Filter from "../../decorators/Filter";

class ProductCatalog extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    handleClick = (event, id) => {
        event.preventDefault();
        this.props.getProducts({category: id});
        console.log(id);
    };

    render() {

        const { categories } = this.props;

        let listCategories = (
            categories.docs.map((category, index) => (
                <a
                    key={index}
                    // href={`/${category._id}`}
                    onClick={(event) => this.handleClick(event, category._id)}
                    className="list-group-item list-group-item-action">
                    {category.title}
                </a>
            ))
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
                    <SpecificProducts />
                </div>
            </div>

        );
    }
}

ProductCatalog.propTypes = {
    getCategories: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state)
});

const mapDispatchToProps = {
    getCategories,
    getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog);

