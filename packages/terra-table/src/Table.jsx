import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The header passed to the table
   */
  header: PropTypes.element,
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the table.
   */
  refCallback: PropTypes.func,
  fill: PropTypes.bool,
};

const defaultProps = {
  paddingStyle: 'none',
  fill: false,
};

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);
    this.initializeResize = this.initializeResize.bind(this);
    this.removeResize = this.removeResize.bind(this);
    this.contentRef = React.createRef();
    this.insetRef = React.createRef();
    this.offset = 0;
  }

  componentDidMount() {
    if (this.props.fill && this.contentRef.current) {
      this.initializeResize();
    }
  }

  componentDidUpdate() {
    if (this.props.fill && this.contentRef.current) {
      this.initializeResize();
    } else {
      this.removeResize();
    }
  }

  initializeResize() {
    if (!this.resizeListenerAdded) {
      this.resizeObserver = new ResizeObserver(() => {
        const offset = this.contentRef.current.offsetWidth - this.contentRef.current.clientWidth;
        if (this.offset !== offset) {
          this.offset = offset
          this.updateSize(this.offset);
        }
      });
      this.resizeObserver.observe(this.contentRef.current);
      this.resizeListenerAdded = true;
    }
  }

  removeResize() {
    if (this.resizeListenerAdded) {
      this.resizeObserver.disconnect(this.contentRef.current);
      this.resizeListenerAdded = false;
    }
  }

  updateSize(width) {
    if (this.insetRef.current) {
      this.insetRef.current.style.width = `${width}px`;
    }
  }

  render () {
    const {
      children,
      fill,
      header,
      paddingStyle,
      refCallback,
      ...customProps
    } = this.props;
    const tableClassNames = cx([
      'table',
      { fill },
      customProps.className,
    ]);

    const attrSpread = {};
    if (paddingStyle !== 'none') {
      attrSpread['data-table-padding'] = paddingStyle;
    }

    // TODO: switch header to array of header cells
    return (
      <div {...customProps} {...attrSpread} className={tableClassNames} ref={refCallback} role="grid">
        <div className={cx(['header'])} role="rowgroup">
          <div className={cx(['header-content'])} role="row">
            {header}
          </div>
          <div className={cx(['header-inset'])} ref={this.insetRef} />
        </div>
        <div className={cx(['body'])} role="rowgroup" ref={this.contentRef}>
          {children}
        </div>
      </div>
    );
  };
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
