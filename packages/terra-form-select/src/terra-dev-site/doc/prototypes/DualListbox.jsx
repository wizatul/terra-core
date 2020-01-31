import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list';
import ContentContainer from 'terra-content-container';
import SearchField from 'terra-search-field'
import VisuallyHiddenText from 'terra-visually-hidden-text';
import classNames from 'classnames/bind';
import styles from './DualListbox.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  description: PropTypes.string,
  isVerticalDisplay: PropTypes.bool,
  columnOneData: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    onSearch: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSelectItem: PropTypes.func,
    selectAllTitle: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      metaData: PropTypes.object,
      node: PropTypes.node,
    })),
  }),
  columnTwoData: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    onSearch: PropTypes.func,
    onSelectAll: PropTypes.func,
    onSelectItem: PropTypes.func,
    selectAllTitle: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      metaData: PropTypes.object,
      node: PropTypes.node,
    })),
  }),
};


const Inline = ({
  description,
  isVerticalDisplay,
  columnOneData,
  columnTwoData,
  ...customProps
}) => {
  const createColumn = (columnData) => {
    if (!columnData) {
      return undefined;
    }
    
    const listItems = columnData.items.map(item => {
      return (
        <Item
          key={item.key}
          isSelectable
          metaData={item.metaData}
          onSelect={columnData.onSelectItem}
        >
          {item.node}
        </Item>
      );
    })

    return (
      <div className={cx('col-1')}>
        <ContentContainer
          fill
          header={
            <>
              <div>{columnData.title}</div>
              <SearchField onSearch={onSearch} className={cx('input')} />
            </>
          }
          footer={<button>{columnData.selectAllTitle}</button>}
        >
          <List role="listbox">
            {listItems}
          </List>
        </ContentContainer>
      </div>
    );
  };

  return (
    <div className={cx('outer')}>
      {createColumn(columnOneData)}
      {createColumn(columnTwoData)}
      <VisuallyHiddenText aria-atomic="true" aria-live="polite" text={description} />
    </div>
  );
};

Inline.propTypes = propTypes;

export default Inline;
