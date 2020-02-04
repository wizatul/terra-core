import React, {
  useState,
} from 'react';
import * as KeyCode from 'keycode-js';
import DualListbox from './DualListbox';

const Inline = () => {
  const [isOpen, setIsOpen] = useState(true);
  const style = {
    backgroundColor: 'orange',
    height: isOpen ? '300px' : '0',
    overflow: isOpen ? 'auto' : 'hidden',
  };

  const style2 = {
    backgroundColor: 'pink',
    height: '30px',
    width: '100%',
  };

  const onKeyDown = event => {
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <button aria-haspopup="listbox" tabIndex="0" style={style2} role="select" onClick={() => setIsOpen(!isOpen)} />
      <div aria-hidden={!isOpen} style={style}>
        <DualListbox
          columnOneData={{
            isLoading: true,
            onSearch: () => {},
            onSelectAll: () => {},
            selectAllTitle: '>>',
            items: [
              {
                key: 'text-1-key',
                node: 'text 1',
              },
              {
                key: 'text-2-key',
                node: 'text 2',
              },
            ],
          }}
          columnTwoData={{
            onSearch: () => {},
            onSelectAll: () => {},
            selectAllTitle: '<<',
            items: [
              {
                key: 'text-3-key',
                node: 'text 3',
              },
              {
                key: 'text-4-key',
                node: 'text 4',
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default Inline;
