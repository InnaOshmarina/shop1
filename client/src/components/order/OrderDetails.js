import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOrder } from '../../store/Order/actions';

class OrderDetails extends Component {

    componentDidMount() {
        this.props.getOrder(this.props.match.params.id);
    }

    render() {
        const { order } = this.props;
        //console.log(this.props);

        // const tableContent = (
        //     <table className="table mb-5">
        //         <thead>
        //             <tr className="table-header text-center">
        //                 <th style={{width:42+"%"}}>Name of Product</th>
        //                 <th style={{width:20+"%"}}>Price, BYN</th>
        //                 <th style={{width:18+"%"}}>Number</th>
        //                 <th style={{width:20+"%"}}>Amount, BYN</th>
        //             </tr>
        //         </thead>
        //         <tbody className="productsL">
        //         {
        //             order.products.forEach((product, index) =>
        //                 (
        //                     <tr key={index}>
        //                         <td>{product.item.title}</td>
        //                         <td>{product.item.price}</td>
        //                         <td className="text-center">{product.quantity}</td>
        //                         <td className="text-center">{product.amount}</td>
        //                     </tr>
        //                 )
        //             )
        //         }
        //         <tr className="total">
        //             <td colSpan="2" className="text-right">Total:</td>
        //             <td className="text-center">{order.totalQuantities}</td>
        //             <td className="text-center">{order.totalAmount}</td>
        //         </tr>
        //         </tbody>
        //     </table>
        // );

        return (
            <div className="mt-4">
                {/*{tableContent}*/}
                <p>The total number of items in the order: {order.totalQuantities}</p>
                <p>Total amount of order: {order.totalAmount} BYN</p>
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

