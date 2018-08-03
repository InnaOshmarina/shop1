import React from 'react';
import {TextFormat} from "../../helpers/TableHelper";
import Actions from "./Actions";
import {SORTACTION} from "../../constans/GlobalConstans";

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
                                        {TextFormat(dataItem[headerItem.name], headerItem.options.type)}
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
export default DataTable;
