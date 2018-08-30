import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NotFound from "../shared/NotFound";
import {createNotification} from "../../helpers/NotificationsHelper";

import '../../css/Checkout.css'

class Checkout extends Component {

    componentWillUnmount() {
        this.props.setDefaultIsSent();
    }

    removeFromCart = (event, product, quantity) => {
        event.preventDefault();
        if(quantity > 1) {
            this.props.addToCart(product, -1);
        }
    };

    addToCart = (event, product) => {
        event.preventDefault();

        this.props.addToCart(product, 1);
    };

    deleteFromCart = (event, id) => {
        event.preventDefault();

        this.props.deleteFromCart(id);
    };

    deleteFormationOrder = (event, allProducts) => {
        if (window.confirm('Are you sure you want to remove all items from your cart?')) {
            event.preventDefault();
            this.props.deleteFormationOrder(allProducts);
        }
    };

    checkout = (event) => {
        event.preventDefault();

        const message = 'Your order is successfully placed!';
        createNotification('success', message);

        this.props.checkout(this.props);
        this.props.deleteFormationOrder(this.props);
        this.props.isSentOrder();
    };

    render() {
        const {docs, totalQuantities, totalAmount, isSent} = this.props;

        let content = (
            <div>
                <table className="table mb-5">
                    <thead>
                    <tr className="table-header text-center">
                        <th style={{width:37+"%"}}>Name of Product</th>
                        <th style={{width:20+"%"}}>Price, BYN</th>
                        <th style={{width:18+"%"}}>Number</th>
                        <th style={{width:20+"%"}}>Amount, BYN</th>
                        <th style={{width:5+"%"}}></th>
                    </tr>
                    </thead>
                    <tbody className="productsL">
                    {
                        docs.map((doc, index) =>
                            (
                                <tr key={index}>
                                    <td>{doc.item.title}</td>
                                    <td className="text-center">{doc.item.price}</td>


                                    <td className="d-flex flex-row justify-content-center">
                                        <button type="button" className="btn quantity less"
                                        onClick={event => this.removeFromCart(event, doc.item, doc.quantity)}>
                                                <i className="fas fa-minus quantity"/>
                                        </button>

                                        <input type="number" min="0" className="form-control"
                                                value={doc.quantity} />

                                        <button type="button" className="btn quantity more"
                                                onClick={event => this.addToCart(event, doc.item)}>
                                                <i className="fas fa-plus quantity"/>
                                        </button>
                                    </td>


                                    <td className="text-center">{doc.amount}</td>
                                    <td className="text-center">
                                        <button type="button" className="btn remove"
                                                onClick={(event) => this.deleteFromCart(event, doc.item._id)}>
                                            <i className="far fa-trash-alt removal"/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    <tr className="total">
                        <td colSpan="2" className="text-right">Total:</td>
                        <td className="text-center">{totalQuantities}</td>
                        <td className="text-center">{totalAmount}</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-danger"
                            onClick={event => this.deleteFormationOrder(event, this.props)}>
                        Delete order
                    </button>

                    <button type="button" className="btn btn-success"
                            onClick={event => this.checkout(event)}>
                        Place order
                    </button>
                </div>
            </div>
        );

        if (isSent) {
            content = (
                <p className="py-4 is-sent">
                    Thank you for your order. Your order will be processed shortly.
                </p>
            );
        }

        const message = (
            <span>Your basket is empty. To place an order, you must select at least one product.</span>
        );

        const emptyBasket = <NotFound data={docs} message={message}/>;

        return (
            <div className="checkout">
                <h2 className="checkout-header">Checkout</h2>
                {(docs.length > 0 || isSent) ? content : emptyBasket}
            </div>
        );
    }
}

Checkout.propTypes = {
    addToCart: PropTypes.func.isRequired,
    deleteFromCart: PropTypes.func.isRequired,
    deleteFormationOrder: PropTypes.func.isRequired,
    checkout: PropTypes.func.isRequired,
    docs: PropTypes.array.isRequired,
    totalQuantities: PropTypes.string.isRequired,
    totalAmount: PropTypes.number.isRequired,
    isSent: PropTypes.bool.isRequired,
    isSentOrder: PropTypes.func.isRequired
};

export default Checkout;

