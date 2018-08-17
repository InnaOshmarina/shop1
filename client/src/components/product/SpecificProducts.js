import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import compose from "redux/src/compose";

import {getProducts} from "../../store/Product/actions";
import {getProductsSelector} from "../../store/Product/selectors";

import Search from "../shared/Search";
import Filter from "../../decorators/Filter";

import '../../css/SpecificProducts.css';


class SpecificProducts extends Component {

    componentDidMount() {
        console.log('Hey!!!!!!!!!!!!!');
    }

    render() {
        const { products } = this.props;

        const content = (
            products.docs.map((product, index) => {
                return (
                    <div className="row mt-4" key={index}>
                        <div className="col-md-9">
                            <h6>{product.title}</h6>
                            <p>{product.description}</p>
                        </div>
                        <div className="col-md-3 d-flex align-items-end flex-column">
                            <span>{product.price}</span>
                            <button className="btn btn-warning btn-sm mt-auto"
                                    type="button"
                            >
                                <i className="fas fa-cart-arrow-down"/>
                                <span>&nbsp;&nbsp;В корзину</span>
                            </button>
                        </div>
                    </div>
                )
            })
        );
        return (
            <div className="container">
                <Search handleFilterChange={this.props.handleFilterChange} />
                {content}
            </div>
        );
    }
}

SpecificProducts.propTypes = {
    getData: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    products: getProductsSelector(state),

});
const mapDispatchToProps = {
    getData: getProducts
};

const defaultFilter = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (component) => Filter(component, defaultFilter)
)(SpecificProducts);
