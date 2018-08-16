import React, {Component} from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';

import {TextFormat} from "../../helpers/TableHelper";

class DataTableDetails extends Component {

    render() {
        const {
            pageHeader,
            headers,
            currentItem
        } = this.props;

        const titled = (
            <h2 className="text-center mb-4">
                Detail view of {pageHeader}
            </h2>
        );

        let tableContent;

        tableContent = (
                <table className="table table-bordered">
                    <tbody>
                            {
                                headers.map((headerItem, index) => (
                                    <tr key={index}>
                                        <th>{headerItem.options.headerName}</th>
                                        <td>{TextFormat(lodash.get(currentItem, headerItem.name), headerItem.options.type)}</td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
        );

        return (
            <div className="mt-4">
                {titled}
                {tableContent}
            </div>
        );
    }
}

DataTableDetails.propTypes = {
    pageHeader: PropTypes.string.isRequired,
    headers: PropTypes.array.isRequired,
    currentItem: PropTypes.object.isRequired
};

export default DataTableDetails;
