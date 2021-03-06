import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DataTable from '../shared/DataTable';
import {SORTACTION, TEXTFORMAT} from "../../constans/GlobalConstans";
import Search from "../shared/Search";


class ProductsList extends Component {

    render() {
        const { products, limit, total, offset } = this.props;
        //console.log(this.props);

        const headers = [
            {
                name: 'title',
                options: {
                    headerName: 'Name',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'category.title',
                options: {
                    headerName: 'Category',
                    sotField: 'category',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'price',
                options: {
                    headerName: 'Price',
                    type: TEXTFORMAT.number
                }
            },
            {
                name: 'quantityInStock',
                options: {
                    headerName: 'In stock',
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
                    linkTemplate: 'products/detail/:_id'
                }
            },
            {
                name: 'editing',
                options: {
                    icon: SORTACTION.pencil,
                    type: SORTACTION.link,
                    linkTemplate: 'products/edit/:_id'
                }
            },
            {
                name: 'removal',
                options: {
                    icon: SORTACTION.trashBin,
                    type: SORTACTION.action,
                    actionFunction: ({_id}) => {
                        this.props.deleteProduct(_id);
                    }
                }
            }
        ];

        return (
            <div>
                <Link to="/products/add">
                    <button type="button" className="btn btn-success">Add Product</button>
                </Link>
                <Search
                    handleFilterChange={this.props.handleFilterChange}
                />
                <DataTable
                    getData={this.props.getData}
                    currentFilter={this.props.currentFilter}
                    handleFilterChange={this.props.handleFilterChange}
                    handleChangeSort={this.props.handleChangeSort}
                    data={products.docs}
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

ProductsList.propTypes = {
    getData: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};

export default ProductsList;
