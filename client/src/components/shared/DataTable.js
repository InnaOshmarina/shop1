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
        <div>
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
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active">
                      <span className="page-link">
                        2
                        <span className="sr-only">(current)</span>
                      </span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );

    return (
        <div className="mt-4">
            {tableContent}
        </div>
    );
};
export default DataTable;
