import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Switch from '../../src/Switch';

describe('Switch', () => {
  const defaultRender = <Switch switchId="defaultSwitch" labelId="label1" labelText="default" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as disabled when set', () => {
    const button = shallowWithIntl(<Switch switchId="disabledSwitch" labelId="label2" labelText="Label" disabled />);
    expect(button).toMatchSnapshot();
    expect(button.find('.slider').prop('disabled')).toBe(true);
  });

  // Prop Tests
  it('should use the default label text when is given', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper.find('.label-text').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class switch', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper.prop('className')).toContain('switch');
  });
});
