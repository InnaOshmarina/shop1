import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../css/SpecificProducts.css';


class SpecificProducts extends Component {
    // componentDidMount() {
    //     console.log('Hey');
    // }
    // componentDidMount() {
    //     this.props.getProducts(this.props.match.params.id);
        // if(this.props.match.params.id) {
        //     this.props.getCategory(this.props.match.params.id);
        // }
    //}

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.product.product && this.props.match.params.id) {
    //         this.setState(nextProps.product.product)
    //     }
    // }
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
                {content}
            </div>
        );
    }
}

SpecificProducts.propTypes = {
    products: PropTypes.object.isRequired
};

export default SpecificProducts;
