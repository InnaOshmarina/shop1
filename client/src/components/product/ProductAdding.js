import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../shared/TextFieldGroup';
import TextAreaFieldGroup from "../shared/TextAreaFieldGroup";
import {addProduct, getProduct, editProduct } from '../../store/Product/actions';
import {getCategories} from "../../store/Category/actions";
import SelectListGroup from "../shared/SelectListGroup";
// import TextAreaDraft from "../shared/TextAreaDraft";

class ProductAdding extends Component {

    // static defaultProps = {
    //     errors: {}
    // };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            price: '',
            quantityInStock: '',
            errors: {},
            category: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.getProduct(this.props.match.params.id);
        }

        this.props.getCategories({limit: 100});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        if(nextProps.product.product && this.props.match.params.id) {
            this.setState(nextProps.product.product)
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const productData = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            quantityInStock: this.state.quantityInStock,
            category: this.state.category
        };

        if(this.props.match.params.id) {
            this.props.editProduct(this.props.match.params.id, productData, this.props.history);
        } else {
            this.props.addProduct(productData, this.props.history);
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;

        let title;
        if(this.props.match.params.id) {
            title = "Editing Of Product";
        } else {
            title = "Add Of New Product";
        }

        return (
            <div className="category-adding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="text-center mb-4">{title}</h4>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="Title Of Product"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                    error={errors.title}
                                />
                                <SelectListGroup
                                    placeholder="Category"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.onChange}
                                    options={this.props.categories.docs}
                                    error={errors.category}
                                    info="Select the category to which this product belongs"
                                />
                                <TextAreaFieldGroup
                                    placeholder="Description Of Product"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    error={errors.description}
                                    info="Description of product must be 10 characters or more"
                                />
                                {/*<TextAreaDraft*/}
                                    {/*placeholder="Description Of Product"*/}
                                    {/*name="description"*/}
                                    {/*value={this.state.description}*/}
                                    {/*onChange={this.onChange}*/}
                                {/*/>*/}
                                <TextFieldGroup
                                    placeholder="Price Of Product"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChange}
                                    error={errors.price}
                                />
                                <TextFieldGroup
                                    placeholder="Quantity In Stock"
                                    name="quantityInStock"
                                    value={this.state.quantityInStock}
                                    onChange={this.onChange}
                                    error={errors.quantityInStock}
                                    info="QuantityInStock field must be zero or positive integer"
                                />

                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductAdding.propTypes = {
    product: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product,
    errors: state.errors,
    categories: state.category.categories
});

// Here are actions
const mapDispatchToProps = {
    addProduct,
    getProduct,
    editProduct,
    getCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductAdding));

