import React from 'react';
import classnames from 'classnames/bind';
import DropdownButton, { Item } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container-spacing-wrapper')}>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <p>
      Lorem Ipsum Text
    </p>
    <DropdownButton label="Dropdown" id="dropdown">
      <Item label="1st" onSelect={() => {}} />
      <Item label="2nd" onSelect={() => {}} />
      <Item label="3rd" onSelect={() => {}} />
      <Item label="4st" onSelect={() => {}} />
      <Item label="5nd" onSelect={() => {}} />
      <Item label="6rd" onSelect={() => {}} />
      <Item label="7st" onSelect={() => {}} />
      <Item label="8nd" onSelect={() => {}} />
      <Item label="9rd" onSelect={() => {}} />
      <Item label="10st" onSelect={() => {}} />
      <Item label="11nd" onSelect={() => {}} />
      <Item label="12rd" onSelect={() => {}} />
    </DropdownButton>
  </div>
);
