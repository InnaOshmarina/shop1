import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../css/SpecificProducts.css';
import {connect} from "react-redux";
import {addToCart} from "../../store/Basket/actions";
import {getBasketSelector} from "../../store/Basket/selectors";

class SpecificProducts extends Component {

    componentDidMount() {
        console.log('Hey!!!!!!!!!!!!!');
    }

    addToCart = (event, product, quantity) => {
        event.preventDefault();

        this.props.addToCart(product, quantity);
    };

    render() {
        const { products } = this.props;

        const content = (
                products.docs.map((product, index) => {
                    return (
                        <div id="specific-products" className="row mt-4" key={index}>
                            <div className="col-md-9">
                                <h6 style={{fontSize:1+ "rem"}}>{product.title}</h6>
                                <p className="specific-products">{product.description}</p>
                            </div>
                            <div className="col-md-3 d-flex align-items-end flex-column">
                                <span>{product.price} BYN</span>
                                <button className="btn btn-warning btn-sm mt-auto"
                                        type="button"
                                        onClick={event => this.addToCart(event, product, product.quantity)}
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

