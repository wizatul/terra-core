import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import ModalFooter from './_ModalFooter';
import ModalHeader from './_ModalHeader';
import styles from './_Modal.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Modal({
  children,
}) {
  return (
    <ContentContainer fill header={<ModalHeader />} footer={<ModalFooter />}>
      {children}
    </ContentContainer>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
