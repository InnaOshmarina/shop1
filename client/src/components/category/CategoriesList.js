import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, deleteCategory } from '../../actions/categoryActions';
import DataTable from '../shared/DataTable';
import {SORTACTION, TEXTFORMAT} from "../../constans/GlobalConstans";

class CategoriesList extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props;

        const headers = [
            {
                name: 'title',
                options: {
                    headerName: 'Name',
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
                    linkTemplate: 'categories/detail/:_id'
                }
            },
            {
                name: 'editing',
                options: {
                    icon: SORTACTION.pencil,
                    type: SORTACTION.link,
                    linkTemplate: 'categories/edit/:_id'
                }
            },
            {
                name: 'removal',
                options: {
                    icon: SORTACTION.trashBin,
                    type: SORTACTION.action,
                    actionFunction: (id) => {
                        this.props.deleteCategory(id);
                    }
                }
            }
        ];

        return (
            <div>
                <Link to="/category-adding">
                    <button type="button" className="btn btn-success">Add Category</button>
                </Link>
                <DataTable
                    getData={this.props.getCategories}
                    data={categories.docs}
                    total={categories.total}
                    limit={categories.limit}
                    headers={headers}
                    operations={operations}
                />
            </div>
        );
    }
}

CategoriesList.propTypes = {
    getCategories: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    headers: PropTypes.array.isRequired,
    operations: PropTypes.array.isRequired
    categories: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    categories: state.category.categories
});

export default connect(mapStateToProps, { getCategories, deleteCategory })(CategoriesList);
