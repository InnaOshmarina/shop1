import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import {TextFormat} from "../../helpers/TableHelper";
import Actions from "./Actions";


const DataTable = (props) => {
    const data = props.data;
    const headers = props.headers;
    const operations = props.operations;

    let tableContent;

    tableContent = (
        <table className="table">
            <thead>
            <tr>
                {
                    headers.map((headerItem, index) => {
                        return <th key={index}>{headerItem.options.headerName}</th>
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
    );

    return (
        <div className="mt-4">
            {tableContent}
        </div>
    );
};

DataTable.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    operations: PropTypes.array.isRequired
};

export default DataTable;
