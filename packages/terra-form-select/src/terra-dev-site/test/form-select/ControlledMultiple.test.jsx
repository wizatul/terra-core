import React, { useState } from 'react';
import Select from '../../../Select';

const Example = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <p>
        Click Count:
        {' '}
        {clickCount}
      </p>
      <Select placeholder="example" variant="multiple" onClick={() => setClickCount(clickCount + 1)}>
        <Select.Option value="blue" display="Blue" />
        <Select.Option value="green" display="Green" />
        <Select.Option value="purple" display="Purple" />
        <Select.Option value="red" display="Red" />
        <Select.Option value="violet" display="Violet" />
      </Select>
    </div>

  );
};

export default Example;
