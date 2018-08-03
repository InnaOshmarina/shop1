import React from 'react';
import '../../css/ProtectedLayout.css';
import ActionCell from "./ActionCell";

const Actions = (props) => {

    const { operations, row } = props;

    const tdContent = (
      <td>
            {
                operations.map((operation, operationIndex) => (
                    <ActionCell key={operationIndex} operation={operation} row={row} />
                ))

            }
      </td>
    );

    return tdContent;
};
export default Actions;
