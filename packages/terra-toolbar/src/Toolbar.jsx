import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames/bind';
// import styles from './Heading.module.scss';

// const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const Toolbar = ({
  children, ...customProps
}) => {
  return (
    <div {...customProps}>
      {children}
    </div>
  );
};

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
