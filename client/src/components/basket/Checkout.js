import React, {Component} from 'react';
import PropTypes from 'prop-types';

import NotFound from "../shared/NotFound";


class Checkout extends Component {
    // state = {
    //     quantity: '',
    // };
    //
    // updateQuantity(event, doc) {
    //     this.setState()
    // };

    deleteFromCart = (event, id) => {
        event.preventDefault();

        this.props.deleteFromCart(id);
    };

    render() {
        const {docs} = this.props;

        const notEmpty = (
            <div>
                <table className="table mb-5">
                    <thead>
                    <tr className="header text-center">
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
                                        <button type="button" className="btn quantity less">
                                                <i className="fas fa-minus quantity"/>
                                        </button>

                                        <input type="number" min="0" className="form-control"
                                                value={doc.quantity} />
                                               {/*value={this.state.quantity}*/}
                                               {/*onChange={(event) => this.updateQuantity(event.target.value, doc)}/>*/}

                                        <button type="button" className="btn quantity more">
                                                <i className="fas fa-plus quantity"/>
                                        </button>
                                    </td>


                                    <td className="text-center"></td>
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
                    </tbody>
                </table>
                <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-danger">
                        Delete order
                    </button>

                    <button type="button" className="btn btn-success">
                        Place order
                    </button>
                </div>
            </div>
        );

        const message = 'Your basket is empty.\n' + '\n' + 'To place an order, you must select at least one product.';
        const empty = <NotFound data={docs} message={message}/>;

        return (
            <div className="checkout">
                <h3>Checkout</h3>
                {docs.length > 0 ? notEmpty : empty}
            </div>
        );
    }
}

Checkout.propTypes = {
    deleteFromCart: PropTypes.func.isRequired,
    docs: PropTypes.array.isRequired
};

export default Checkout;

