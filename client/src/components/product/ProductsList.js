import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../../actions/productActions';
import DataTable from '../shared/DataTable';
import {SORTACTION, TEXTFORMAT} from "../../constans/GlobalConstans";

class ProductsList extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products } = this.props;
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
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'description',
                options: {
                    headerName: 'Description',
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
                    linkTemplate: ''
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
                    actionFunction: (id) => {
                        this.props.deleteProduct(id);
                    }
                }
            }
        ];

        return (
            <div>
                <Link to="/product-adding">
                    <button type="button" className="btn btn-success">Add Product</button>
                </Link>
                <DataTable
                    data={products}
                    headers={headers}
                    operations={operations}
                />
            </div>
        );
    }
}

ProductsList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    operations: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    products: state.product.products
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(ProductsList);
