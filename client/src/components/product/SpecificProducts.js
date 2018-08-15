import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../css/SpecificProducts.css';

class SpecificProducts extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-9">
                        <h6>Name of product</h6>
                        <p>Description of product</p>
                    </div>
                    <div className="col-md-3 d-flex align-items-end flex-column">
                        <span>Price</span>
                        <button className="btn btn-warning btn-sm mt-auto"
                                type="button"
                        >
                            <i className="fas fa-cart-arrow-down"/>
                            <span>&nbsp;&nbsp;В корзину</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

SpecificProducts.propTypes = {};

export default SpecificProducts;
