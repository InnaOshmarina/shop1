import React from 'react';
import {TextFormat} from "../../helpers/TableHelper";

const DataTable = (props) => {
    const data = props.data;
    const headers = props.headers;

    let tableContent = (
        <table className="table">
            <thead>
                <tr>
                    {
                        headers.map((headerItem, index) => {
                          return <th key={index}>{headerItem.options.headerName}</th>
                        })
                    }
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
