import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconRight from 'terra-icon/lib/icon/IconRight';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import classNames from 'classnames/bind';
import ListBox from './_ListBox';
import DualListUtils from './_DualListBoxUtils';
import styles from './DualListBox.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child Nodes that are rendered as target listbox.
   */
  source: PropTypes.node,
  /**
   * Child Nodes that are rendered as target listbox.
   */
  target: PropTypes.node,
};

const defaultProps = {
  source: undefined,
  target: undefined,
};

const DualListBox = (props) => {
  const {
    source,
    target,
  } = props;

  const [sourceList, setSourceList] = useState(source);
  const [targetList, setTargetList] = useState(target);

  useEffect(() => {
    DualListUtils.clearSelections();
  }, [sourceList, targetList]);

  const iconLeftOnClick = () => {
    const { targetItems, sourceItems } = (DualListUtils.moveItems(targetList, sourceList));
    setSourceList(targetItems);
    setTargetList(sourceItems);
  };

  const iconRightOnClick = () => {
    const { targetItems, sourceItems } = (DualListUtils.moveItems(sourceList, targetList));
    setTargetList(targetItems);
    setSourceList(sourceItems);
  };

  return (
    <div className={cx('container')}>
      <ListBox headerLabelText="Source">
        {sourceList}
      </ListBox>
      <div className={cx('button-wrapper')}>
        <button className={cx('arrow-button')} type="button" onClick={iconLeftOnClick}>
          <IconLeft />
        </button>
        <button className={cx('arrow-button')} type="button" onClick={iconRightOnClick}>
          <IconRight />
        </button>
      </div>
      <ListBox headerLabelText="Target">
        {targetList}
      </ListBox>
    </div>
  );
};

DualListBox.propTypes = propTypes;
DualListBox.defaultProps = defaultProps;
export default DualListBox;
