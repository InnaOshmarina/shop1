import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';


import {TextFormat} from "../../helpers/TableHelper";
import Actions from "./Actions";
import Pagination from "./Pagination";

import './DataTable.css';


class DataTable extends Component {

    // Todo Refactoring (add HOC for sorting)

    state = {
        sort: { date: -1 }
    };

    getArrowSort = (headerName) => {
        let answer = null;
        if(this.state.sort[headerName]) {
            answer = <i className="arrow arrow-down"/>;

            if(this.state.sort[headerName] === 1) {
                answer =  <i className="arrow arrow-up"/>;
            }
        }

        return answer;
    }

    handleChangeSort = (headerItem) => {
        let sort = {};
        if (this.state.sort[headerItem]) {
            sort[headerItem] = this.state.sort[headerItem] * -1;
        } else {
            sort[headerItem] = -1;
        }
        this.setState({ sort}, () => {});
        this.props.getData({sort: sort});

    };

    render() {
        const {
            data,
            headers,
            operations,
            total,
            limit,
            getData
        } = this.props;

        let tableContent;
        let pagination = null;

        if (limit && total && getData){
            pagination = (
                <Pagination
                    total={total}
                    limit={limit}
                    paginateChange={getData}
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
                                       onClick={(event) => this.handleChangeSort(headerItem.name)}
                                    >
                                    {this.getArrowSort(headerItem.name)}
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
                                            {/*{TextFormat(dataItem[headerItem.name], headerItem.options.type)}*/}
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
    operations: PropTypes.array.isRequired
};

export default DataTable;
