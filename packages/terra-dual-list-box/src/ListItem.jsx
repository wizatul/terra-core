import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'terra-form-checkbox';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-cycle
import DualListUtils from './_DualListBoxUtils';
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
  labelText: PropTypes.node.isRequired,
  /**
    * The value of the input element.
    */
  value: PropTypes.string,
  /**
    * Function to trigger when user clicks on the checkbox. Provide a function to create a controlled input.
    */
  onChange: PropTypes.func,
};

const ListItem = ({
  itemId,
  disabled,
  labelText,
  value,
  onChange,
}) => {
  const listItemClassNames = cx([
    'list-item',
  ]);

  const handleOnChange = (event) => {
    DualListUtils.updateSelectedItems(event.currentTarget.id, event.currentTarget.checked);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Checkbox
      id={itemId}
      disabled={disabled}
      labelText={labelText}
      value={value}
      className={listItemClassNames}
      onChange={handleOnChange}
    />
  );
};

ListItem.propTypes = propTypes;
export default ListItem;
