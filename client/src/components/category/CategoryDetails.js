import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategory} from '../../actions/categoryActions';

class CategoryDetails extends Component {

    componentDidMount() {
        this.props.getCategory(this.props.match.params.id);

    }
    render() {
        const { category } = this.props;

        return (
            <div className="mt-4">
                <p>{category.title}</p>
                <p>{category.description}</p>
            </div>
        );
    }
}

CategoryDetails.propTypes = {
    category: PropTypes.object.isRequired,
    getCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    category: state.category,
    errors: state.errors
});

export default connect(mapStateToProps, { getCategory })(CategoryDetails);

