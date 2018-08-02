import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import DataTable from '../shared/DataTable';
import { TEXTFORMAT } from "../../constans/GlobalConstans";

class ProductsList extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products } = this.props;
        console.log(this.props);

        const headers = [
            {
                name: 'title',
                options: {
                    headerName: 'Name of product',
                    type: TEXTFORMAT.string
                }
            },
            {
                name: 'description',
                options: {
                    headerName: 'Brief description',
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
                    headerName: 'Quantity In Stock',
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

        console.log(headers);

        return (
            <div>
                <Link to="/product-adding">
                    <button type="button" className="btn btn-success">Add Product</button>
                </Link>
                <DataTable
                    data={products}
                    headers={headers}
                />
            </div>
        );
    }
}

ProductsList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    products: state.product.products
});

export default connect(mapStateToProps, { getProducts })(ProductsList);
