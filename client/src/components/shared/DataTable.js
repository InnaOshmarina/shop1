import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import {TextFormat} from "../../helpers/TableHelper";
import Actions from "./Actions";
import Pagination from "./Pagination";

import './DataTable.css';
import SortIcon from "./SortIcon";


class DataTable extends Component {

    // Todo Refactoring (add HOC for sorting)

    render() {
        const {
            data,
            headers,
            operations,
            total,
            limit,
            handleFilterChange,
            currentFilter
        } = this.props;

        let tableContent;
        let pagination = null;

        if (limit && total && handleFilterChange){
            pagination = (
                <Pagination
                    total={total}
                    limit={limit}
                    page={currentFilter.page}
                    paginateChange={handleFilterChange}
                />
            );
        }

        tableContent = (
            <div className="dataTable"> <table className="table">
                <thead>
                <tr>
                    {
                        headers.map((headerItem, index) => {
                            return <th key={index}
                                       onClick={(event) => this.props.handleChangeSort(headerItem.name)}
                                    >
                                <SortIcon headerName={headerItem.name} sort={currentFilter.sort}/>
                                    {headerItem.options.headerName}
                                </th>
                        })
                    }
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((dataItem, dataItemIndex) => {
                        return (
                            <tr key={dataItemIndex}>
                                {
                                    headers.map((headerItem, headerItemIndex) => (
                                        <td key={headerItemIndex}>
                                            {TextFormat(lodash.get(dataItem, headerItem.name), headerItem.options.type)}
                                        </td>
                                    ))
                                }
                                <Actions operations={operations} row={dataItem}/>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
                {pagination}
            </div>
        );

        return (
            <div className="mt-4">
                {tableContent}
            </div>
        );
    }
}

DataTable.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    operations: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired
};

export default DataTable;
