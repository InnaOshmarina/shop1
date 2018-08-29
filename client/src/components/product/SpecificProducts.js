import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {NotificationManager} from "react-notifications";
import { Link } from 'react-router-dom';

import {addToCart} from "../../store/Basket/actions";
import {getBasketSelector} from "../../store/Basket/selectors";

import '../../css/SpecificProducts.css';

class SpecificProducts extends Component {

    componentDidMount() {
        console.log('Hey! I am component SpecificProducts.');
    }

    addToCart = (event, product) => {
        event.preventDefault();
        NotificationManager.info('The item is added to cart', 'System notification', 2000);
        this.props.addToCart(product);
    };

    render() {
        const { products } = this.props;

        const content = (
                products.docs.map((product, index) => {
                    return (
                        <div id="specific-products" className="row mt-4" key={index}>
                            <div className="col-md-9">
                                <Link className="specific-product-title"
                                      to={`/products/detail/${product._id}`}
                                >
                                    {product.title}
                                </Link>

                                <p className="specific-products">{product.description}</p>
                            </div>
                            <div className="col-md-3 d-flex align-items-end flex-column">
                                <span>{product.price} BYN</span>
                                <button className="btn btn-warning btn-sm mt-auto"
                                        type="button"
                                        onClick={event => this.addToCart(event, product)}
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
                {content}
            </div>
        );
    }
}

SpecificProducts.propTypes = {
    products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    docs: getBasketSelector(state)
});

const mapDispatchToProps = {
   addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecificProducts);


