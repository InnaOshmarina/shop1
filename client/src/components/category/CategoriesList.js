import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from "redux/src/compose";

import { getCategories, deleteCategory} from '../../store/actions/categoryActions';
import DataTable from '../shared/DataTable';
import {SORTACTION, TEXTFORMAT} from "../../constans/GlobalConstans";
import Filter from "../../decorators/Filter";
import Search from "../shared/Search";
import {
    getCategoriesSelector,
    getCategoriesLimitSelector,
    getCategoriesOffsetSelector, getCategoriesTotalSelector
} from "../../store/selectors/categorySelectors";


class CategoriesList extends Component {

    render() {
        const { categories, limit, total, offset } = this.props;

        const headers = [
            {
                name: 'title',
                options: {
                    headerName: 'Name',
                    type: TEXTFORMAT.string
                }
            },
            // {
            //     name: 'description',
            //     options: {
            //         headerName: 'Description',
            //         type: TEXTFORMAT.string
            //     }
            // },
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
                    actionFunction: (row) => {
                        this.props.deleteCategory(row._id);
                    }
                }
            }
        ];

        return (
            <div>
                <Link to="/category-adding">
                    <button type="button" className="btn btn-success">Add Category</button>
                </Link>
                <Search
                    handleFilterChange={this.props.handleFilterChange}
                />
                <DataTable
                    getData={this.props.getData}
                    currentFilter={this.props.currentFilter}
                    handleFilterChange={this.props.handleFilterChange}
                    handleChangeSort={this.props.handleChangeSort}
                    data={categories.docs}
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

CategoriesList.propTypes = {
    getData: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    categories: getCategoriesSelector(state),
    limit: getCategoriesLimitSelector(state),
    offset: getCategoriesOffsetSelector(state),
    total: getCategoriesTotalSelector(state)
});

const mapDispatchToProps = {
    getData: getCategories,
    deleteCategory
};

const defaultFilter = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (component) => Filter(component, defaultFilter)
)(CategoriesList);
