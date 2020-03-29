/* eslint-disable no-console */
import React from 'react';
import DualListBox from '../../src/DualListBox';

describe('DualListBox with no props', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = <DualListBox />;
    expect(wrapper).toMatchSnapshot();
  });
});
