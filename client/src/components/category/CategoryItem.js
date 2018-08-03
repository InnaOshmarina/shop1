import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategory, deleteCategory } from '../../actions/categoryActions';

class CategoryItem extends Component {
    componentDidMount() {
        this.props.getCategory(this.props.match.params.id);
    }

    onDeleteClick(id) {
        this.props.deleteCategory(id);
    }
  render() {
    const { category } = this.props;

    return (
      <div className="mt-4">
          <p>{category.title}</p>
          <p>{category.description}</p>
          <p>
              <button onClick={this.onDeleteClick.bind(this, category._id)} className="btn btn-danger">
                Delete
              </button>
          </p>
          <p><Link to="/category-details"><i className="far fa-eye"/></Link></p>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    category: state.category.category,
    errors: state.errors
});


export default connect(mapStateToProps, { getCategory, deleteCategory })(CategoryItem);
