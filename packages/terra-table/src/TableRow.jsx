import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * Whether or not row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not row is selectable
   */
  isSelectable: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
  isSelectable: undefined,
};

function cloneChildItems(children, onClick, onKeyDown) {
  return React.Children.map(children, (child) => {
    const newProps = {};

    if (onClick) {
      newProps.onClick = onClick;
    }
    if (onKeyDown) {
      newProps.onKeyDown = onKeyDown;
    }

    return React.cloneElement(child, newProps);
  });
}

const TableRow = ({
  children,
  isSelected,
  isSelectable,
  onClick,
  onKeyDown,
  ...customProps
}) => {
  const rowClassNames = cx([
    { 'is-selected': isSelected },
    { 'is-selectable': isSelectable },
    'row',
    customProps.className,
  ]);

  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }

  return (
    <div role="row" {...customProps} aria-selected={isSelected} className={rowClassNames} style={{display: 'table-row'}}>
      {isSelectable && <span role="cell"><span style={{position: 'absolute', left: '-10000px'}}>Selectable</span></span>}
      {cloneChildItems(children, onClick, onKeyDown)}
    </div>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
