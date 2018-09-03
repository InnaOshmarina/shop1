import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrder } from '../../store/Order/actions';
import {TEXTFORMAT} from "../../constans/GlobalConstans";
import DataTableDetails from "../shared/DataTableDetails";

class OrderDetails extends Component {

    componentDidMount() {
        this.props.getOrder(this.props.match.params.id);
    }

    render() {
        const { order } = this.props;
        //console.log(order.buyer);

        const pageHeader = 'buyer';

        const headers = [
            {
                name: 'name',
                options: {
                    headerName: 'Name',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'email',
                options: {
                    headerName: 'Email',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'phoneNumber',
                options: {
                    headerName: 'Phone number',
                    type: TEXTFORMAT.string
                }
            }
        ];

        const tableContent = (
            <table className="table table-bordered  table-hover mb-5">
                <thead>
                    <tr className="table-header text-center">
                        <th style={{width:42+"%"}}>Name of Product</th>
                        <th style={{width:20+"%"}}>Price, BYN</th>
                        <th style={{width:18+"%"}}>Number</th>
                        <th style={{width:20+"%"}}>Amount, BYN</th>
                    </tr>
                </thead>
                <tbody className="productsL">
                {
                    order.products.map((product, index) =>
                        (
                            <tr key={index}>
                                <td>{product.item.title}</td>
                                <td className="text-right">{product.item.price}</td>
                                <td className="text-right">{product.quantity}</td>
                                <td className="text-right">{product.amount}</td>
                            </tr>
                        )
                    )
                }
                <tr className="total">
                    <td colSpan="2" className="text-right">Total:</td>
                    <td className="text-right">{order.totalQuantities}</td>
                    <td className="text-right">{order.totalAmount}</td>
                </tr>
                </tbody>
            </table>
        );

        return (
            <div className="mt-4">
                <h2 className="text-center mb-4">Detail view of the order</h2>
                {tableContent}
                <DataTableDetails
                    pageHeader={pageHeader}
                    headers={headers}
                    currentItem={order.buyer}
                />
            </div>
        );
    }
}

OrderDetails.propTypes = {
    order: PropTypes.object.isRequired,
    getOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    order: state.order.order,
    errors: state.errors
});

export default connect(mapStateToProps, {getOrder})(OrderDetails);

