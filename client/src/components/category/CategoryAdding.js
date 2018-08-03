import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../shared/TextFieldGroup';
import {addCategory, getCategory, editCategory} from '../../actions/categoryActions';

class CategoryAdding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.getCategory(this.props.match.params.id);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        if(nextProps.category.category) {
            this.setState(nextProps.category.category)
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const categoryData = {
            title: this.state.title,
            description: this.state.description
        };

        if(this.props.match.params.id) {
            this.props.editCategory(this.props.match.params.id, categoryData, this.props.history);
        } else {
            this.props.addCategory(categoryData, this.props.history);
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="category-adding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h4 className="text-center">Add New Category Of Product</h4>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="Title Of Category"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                    error={errors.title}
                                />
                                <TextFieldGroup
                                    placeholder="Description Of Category"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    error={errors.description}
                                    info="Description of category must be between 10 and 1000 characters"
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

CategoryAdding.propTypes = {
    category: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    category: state.category,
    errors: state.errors
});

export default connect(mapStateToProps, { addCategory, getCategory, editCategory })(
    withRouter(CategoryAdding)
);

