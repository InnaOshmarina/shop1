import React from 'react';
import PropTypes from 'prop-types';
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

Actions.propTypes = {
    operations: PropTypes.array.isRequired,
    row: PropTypes.object.isRequired
};

export default Actions;
