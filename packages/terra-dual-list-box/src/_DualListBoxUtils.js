import React from 'react';
// eslint-disable-next-line import/no-cycle
import Item from './ListItem';

const selectedSourceItems = [];

const clearSelections = () => {
  selectedSourceItems.splice(0, selectedSourceItems.length);
};

const updateSelectedItems = (itemId, checked) => {
  if (checked) {
    selectedSourceItems.push(itemId);
  } else {
    selectedSourceItems.pop(itemId);
  }
};

const moveItems = (source, target) => {
  const targetItems = [...target];
  const sourceItems = [...source];
  React.Children.forEach(source, (item) => {
    if (item && item.type === Item && !targetItems.includes(item) && selectedSourceItems.includes(item.props.itemId)) {
      targetItems.push(item);
      sourceItems.splice(sourceItems.indexOf(item), 1);
    }
  });
  return { targetItems, sourceItems };
};

const DualListBoxUtils = {
  moveItems,
  updateSelectedItems,
  clearSelections,
};

export default DualListBoxUtils;
