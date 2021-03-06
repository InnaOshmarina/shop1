import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import classnames from 'classnames';

import {TextFormat} from "../../helpers/TableHelper";
import Actions from "./Actions";
import Pagination from "./Pagination";

import './DataTable.css';
import SortIcon from "./SortIcon";


// Порядковый номер элемента
const getItemNumber = (currentNumber, currentFilter) => {
    const { offset } = currentFilter;
    let answer = currentNumber + 1;

    if(offset !== undefined && offset !== null) {
        answer +=offset;
    }
    return answer;
};

class DataTable extends Component {

    render() {
        const {
            data,
            headers,
            operations,
            total,
            limit,
            handleFilterChange,
            currentFilter,
            isLoading
        } = this.props;

        let tableContent;

        const classNameTable = classnames('table table-striped table-bordered', {
            isLoading: isLoading
        });

        tableContent = (
            <div className="dataTable">
                <table className={classNameTable}>
                    <thead>
                        <tr>
                            <th>N</th>
                            {
                                headers.map((headerItem, index) => {
                                    return <th
                                                key={index}
                                                onClick={(event) => this.props.handleChangeSort(
                                                    headerItem.options.sotField || headerItem.name)}
                                            >
                                                <SortIcon headerName={headerItem.options.sotField || headerItem.name} sort={currentFilter.sort}/>
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
                                        <td>{getItemNumber(dataItemIndex, currentFilter)}</td>
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
                <Pagination
                    total={total}
                    limit={limit}
                    page={currentFilter.page}
                    paginateChange={handleFilterChange}
                />
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
    getData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
};

export default DataTable;
