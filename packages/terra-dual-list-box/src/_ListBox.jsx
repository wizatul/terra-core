import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import List from 'terra-list';
import Item from './ListItem';
import styles from './DualListBox.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the checkbox.
   */
  itemId: PropTypes.string,
  /**
   * Whether the checkbox element is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Text of the label.
   */
  headerLabelText: PropTypes.node,
  /**
   * Child Nodes that are rendered within background tile.
   */
  children: PropTypes.node,
  /**
  * Function to trigger when user clicks on the checkbox. Provide a function to create a controlled input.
  */
  onChange: PropTypes.func,
  /**
    * The value of the input element.
    */
  value: PropTypes.string,
};

const defaultProps = {
  children: undefined,
};

const ListBox = ({
  itemId,
  disabled,
  headerLabelText,
  value,
  onChange,
  children,
  ...customProps
}) => {
  const handleHeaderCheckBoxOnchange = () => {
    // select all logic should be added
  };

  const header = (
    <Item
      {...customProps}
      itemId={itemId}
      disabled={disabled}
      value={value}
      labelText={headerLabelText}
      onChange={handleHeaderCheckBoxOnchange}
    />
  );

  return (
    <div className={cx('list-box')}>
      <List>
        <div className={cx('list-header-wrapper')}>
          <span className={cx('list-header')}>{header}</span>
          <span className={cx('list-header-count')}>
            {React.Children.count(children)}
            {' '}
            items
            {/* translations needed */}
          </span>
        </div>
        <div className={cx('list-items')}>
          {children}
        </div>
      </List>
    </div>
  );
};

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
export default ListBox;
