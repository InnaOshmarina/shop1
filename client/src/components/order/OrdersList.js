import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DataTable from '../shared/DataTable';
import {SORTACTION, TEXTFORMAT} from "../../constans/GlobalConstans";


class OrdersList extends Component {

    render() {
        const { orders, limit, total, offset } = this.props;
        //console.log(this.props);

        const headers = [
            {
                name: '_id',
                options: {
                    headerName: 'Order number',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'totalAmount',
                options: {
                    headerName: 'Total amount',
                    type: TEXTFORMAT.number
                }
            },
            {
                name: 'date',
                options: {
                    headerName: 'Date of adding',
                    type: TEXTFORMAT.date
                }
            }
        ];

        const operations = [
            {
                name: 'detail view',
                options: {
                    icon: SORTACTION.eye,
                    type: SORTACTION.link,
                    linkTemplate: 'orders/detail/:_id'
                }
            }
        ];

        return (
            <div>
                <DataTable
                    getData={this.props.getData}
                    currentFilter={this.props.currentFilter}
                    handleFilterChange={this.props.handleFilterChange}
                    handleChangeSort={this.props.handleChangeSort}
                    data={orders.docs}
                    total={total}
                    offset={offset}
                    limit={limit}
                    headers={headers}
                    operations={operations}
                />
            </div>
        );
    }
}

OrdersList.propTypes = {
    getData: PropTypes.func.isRequired,
    orders: PropTypes.object.isRequired
};

export default OrdersList;

