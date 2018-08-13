import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../../store/Product/actions';
import {TEXTFORMAT} from "../../constans/GlobalConstans";
import DataTableDetails from "../shared/DataTableDetails";

class ProductDetails extends Component {

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }
    render() {
        const { product } = this.props;

        const pageHeader = 'product';

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

        return (
            <div className="mt-4">
                <DataTableDetails
                    pageHeader={pageHeader}
                    headers={headers}
                    currentItem={product}
                />
            </div>
        );
    }
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    product: state.product.product,
    errors: state.errors
});


export default connect(mapStateToProps, { getProduct })(ProductDetails);

