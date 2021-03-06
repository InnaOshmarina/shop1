import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DataTable from '../shared/DataTable';
import {SORTACTION, TEXTFORMAT} from "../../constans/GlobalConstans";
import Search from "../shared/Search";


class CategoriesList extends Component {

    headers = [
        {
            name: 'title',
            options: {
                headerName: 'Name',
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

    operations = [
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

    render() {
        const { categories, limit, total, offset } = this.props;

        return (
            <div>
                <Link to="/categories/add">
                    <button type="button" className="btn btn-success">Add Category</button>
                </Link>
                <Search
                    handleFilterChange={this.props.handleFilterChange}
                />
                <DataTable
                    isLoading={this.props.isLoading}
                    getData={this.props.getData}
                    currentFilter={this.props.currentFilter}
                    handleFilterChange={this.props.handleFilterChange}
                    handleChangeSort={this.props.handleChangeSort}
                    data={categories.docs}
                    total={total}
                    offset={offset}
                    limit={limit}
                    headers={this.headers}
                    operations={this.operations}
                />
            </div>
        );
    }
}

CategoriesList.propTypes = {
    getData: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    isLoading: PropTypes.bool
};

export default CategoriesList;
