import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
    this.insetWidth = 0;
  }

  componentDidMount() {
    if (this.props.fill && this.contentRef.current) {
      this.initializeResize();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.fill && this.contentRef.current) {
      this.initializeResize();
    } else {
      this.removeResize();
    }
  }

  initializeResize() {
    if (!this.resizeListenerAdded) {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.contentWidth = entries[0].contentRect.width;
        const parent = this.contentRef.current.parentNode;
        const parentStyle = getComputedStyle(parent);
        const inset = parseFloat(parentStyle.borderLeft) + parseFloat(parentStyle.borderRight);
        const parentWidth = this.contentRef.current.parentNode.getBoundingClientRect().width - inset;
        if (parentWidth !== this.contentWidth) {
          this.updateSize(parentWidth - this.contentWidth);
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

    return (
      <div {...customProps} {...attrSpread} className={tableClassNames} ref={refCallback} role="grid">
        <div className={cx(['header'])}>
          <div className={cx(['header-content'])}>
            {header}
          </div>
          <div className={cx(['header-inset'])} ref={this.insetRef} />
        </div>
        <div className={cx(['body'])} ref={this.contentRef}>
          {children}
        </div>
      </div>
    );
  };
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
