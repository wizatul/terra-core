import React from 'react';
import DualListBox from '../../../DualListBox';
import Item from '../../../ListItem';

const DefaultDualListBox = () => {
  const sourceItems = [];
  const targetItems = [];
  for (let index = 1; index <= 3; index += 1) {
    sourceItems.push(<Item key={index} itemId={`Item${index}`} value={`Item${index}`} labelText={`label${index}`} onChange={(event) => { console.log(event.currentTarget.checked); }} />);
  }
  for (let index = 4; index <= 6; index += 1) {
    targetItems.push(<Item key={index} itemId={`Item${index}`} value={`Item${index}`} labelText={`label${index}`} onChange={(event) => { console.log(event.currentTarget.checked); }} />);
  }

  return (
    <DualListBox source={sourceItems} target={targetItems} />
  );
};

export default DefaultDualListBox;
