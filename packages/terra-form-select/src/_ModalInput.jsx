import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
import styles from './_ModalInput.modules.scss';

const cx = classNames.bind(styles);

const propTypes = {
  multiple: PropTypes.bool,
  children: PropTypes.node,
  displayId: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  inputAttrs: PropTypes.shape({}),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  multiple: false,
  children: null,
  inputAttrs: {},
  searchValue: '',
  disabled: false,
  placeholder: undefined,
};

function ModalInput({ multiple, children, displayId, disabled, placeholder, onChange }) {
  const [searchValue, setSearchValue] = useState('');

  const inputAttrs = {
    disabled,
    placeholder,
    onChange,
    type: 'text',
    className: cx('search-input', { 'is-hidden': false }),
  }

  if (multiple) {
    return (
      <ul className={cx('content')}>
        {React.Children.toArray(children).length > 0
          ? (
            <li>
              <ul id={displayId} className={cx('display-content')}>
                {children}
                <li className={cx('visually-hidden-component')}>
                  <FormattedMessage id="Terra.form.select.selected" />
                </li>
              </ul>
            </li>
          ) : null
        }
        <li className={cx('search-wrapper')}>
          <input {...inputAttrs} value={searchValue} />
        </li>
      </ul>
    );
  }

  return (
    <div>ayy</div>
  );
}

ModalInput.propTypes = propTypes;
ModalInput.defaultProps = defaultProps;

export default ModalInput;
