import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import DisclosureManagerContext from 'terra-disclosure-manager/lib/DisclosureManagerContext';
import Button from 'terra-button';
import styles from './_ModalFooter.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  allowClear: PropTypes.bool,
  clearDisabled: PropTypes.bool,
  onClear: PropTypes.func,
  onApply: PropTypes.func,
};

const defaultProps = {
  allowClear: false,
  clearDisabled: false,
  onClear: undefined,
  onApply: undefined,
};

function ModalFooter({
  allowClear,
  clearDisabled,
  onClear,
  onApply,
}) {
  const disclosureManager = useContext(DisclosureManagerContext);

  function onClickApply() {
    if (onApply) {
      onApply();
    }

    if (disclosureManager.dismiss) {
      disclosureManager.dismiss();
    }
  }

  const clearButton = (
    <FormattedMessage id="Terra.form.select.clearAll">
      {text => <Button onClick={onClear} text={text} isDisabled={clearDisabled} />}
    </FormattedMessage>
  );

  const applyButton = (
    <FormattedMessage id="Terra.form.select.apply">
      {text => <Button onClick={onClickApply} text={text} />}
    </FormattedMessage>
  );

  return (
    <div className={cx(['modal-footer'])}>
      <div>{allowClear && clearButton}</div>
      <div>{applyButton}</div>
    </div>
  );
}

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
