import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.any.isRequired,
};

const TableCell = ({
  content,
  ...customProps
}) => (
  <span {...customProps} style={{display: 'table-cell'}} role="cell" data-terra-table-cell>
    <span role="button" {...customProps}>
      {content}
    </span>
  </span>
);

TableCell.propTypes = propTypes;

export default TableCell;
