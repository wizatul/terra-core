import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'terra-button';
import DisclosureManagerContext from 'terra-disclosure-manager/lib/DisclosureManagerContext';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './_ModalHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  title: PropTypes.node,
  onClose: PropTypes.func,
};

const defaultProps = {
  title: null,
  onClose: undefined,
};

function ModalHeader({ title, onClose }) {
  const disclosureManager = useContext(DisclosureManagerContext);

  function onClick() {
    if (onClose) {
      onClose();
    }

    if (disclosureManager.dismiss) {
      disclosureManager.dismiss();
    }
  }

  return (
    <div className={cx(['modal-header'])}>
      <div className={cx(['title-container'])}>
        <h1 className={cx(['title'])}>
          {title}
        </h1>
      </div>
      <div className={cx('close-container')}>
        <FormattedMessage id="Terra.form.select.close">
          {text => <Button isIconOnly icon={<span className={cx(['header-icon', 'close'])} />} text={text} onClick={onClick} />}
        </FormattedMessage>
      </div>
    </div>
  );
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
