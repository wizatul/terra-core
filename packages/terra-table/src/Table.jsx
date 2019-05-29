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
  headerCells: PropTypes.arrayOf(PropTypes.element),
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the table.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the table should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  headerCells: [],
  paddingStyle: 'none',
  fill: false,
};

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);
    this.initializeResize = this.initializeResize.bind(this);
    this.removeResize = this.removeResize.bind(this);
    this.headerRef = React.createRef();
    this.bodyRef = React.createRef();
    this.offsetHeight = 0;
  }

  componentDidMount() {
    if (this.props.fill && this.headerRef.current) {
      this.initializeResize();
    }
  }

  componentDidUpdate() {
    if (this.props.fill && this.headerRef.current) {
      this.initializeResize();
    } else {
      this.removeResize();
    }
  }

  initializeResize() {
    if (!this.resizeListenerAdded) {
      this.resizeObserver = new ResizeObserver((entries) => {
        const { height } = entries[0].contentRect;
        const style = getComputedStyle(this.headerRef.current);
        const paddingHeight = parseFloat(style['border-top-width']) + parseFloat(style['border-bottom-width']);
        const newHeight = height + paddingHeight;
        if (this.headerHeight !== newHeight) {
          this.headerHeigt = newHeight;
          this.updateSize(this.headerHeigt);
        }
      });
      this.resizeObserver.observe(this.headerRef.current);
      this.resizeListenerAdded = true;
    }
  }

  removeResize() {
    if (this.resizeListenerAdded) {
      this.resizeObserver.disconnect(this.headerRef.current);
      this.resizeListenerAdded = false;
    }
  }

  updateSize(top) {
    if (this.bodyRef.current) {
      this.bodyRef.current.style.top = `${top}px`;
    }
  }

  render() {
    const {
      children,
      fill,
      headerCells,
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

    let header;
    if (headerCells.length) {
      header = (
        <div className={cx(['header'])} role="rowgroup" ref={this.headerRef}>
          <div className={cx(['header-content'])} role="row">
            {headerCells}
          </div>
        </div>
      );
    }

    // const stickyStyle = {
    //   top: '57px',
    //   position: 'sticky',
    //   fontSize: '16px',
    //   backgroundColor: 'aliceblue',
    //   margin: '0',
    // };

    // const needHeight = {
    //   // height: '200px',
    //   // paddingBottom: '1px',
    //   margin: '0',
    // };

    // const hStyle = {
    //   // marginTop: '-60px',
    //   // paddingTop: '60px',
    // };

    // return (
    //   <div style={{ height: '400px', position: 'relative', overflow: 'auto', width: '100%' }}>
    //     <div style={{ marginBottom: '10px', height: '57px', fontSize: '20px', top: '0', position: 'sticky', backgroundColor: 'pink', zIndex: '2' }}>
    //       <h1 style={hStyle}>lobster</h1>
    //     </div>
    //     {/* <div style={needHeight}> */}
    //       <div tabIndex="0" style={stickyStyle}>
    //         <h1 style={hStyle}>lobster</h1>
    //       </div>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //     {/* </div> */}
    //     {/* <div style={needHeight}> */}
    //       <div tabIndex="0" style={stickyStyle}>
    //         <h1 style={hStyle}>lobster</h1>
    //       </div>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //     {/* </div> */}
    //     {/* <div style={needHeight}> */}
    //     <div tabIndex="0" style={stickyStyle}>
    //         <h1 style={hStyle}>lobster</h1>
    //       </div>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //     {/* </div> */}
    //     {/* <div style={needHeight}> */}
    //     <div tabIndex="0" style={stickyStyle}>
    //         <h1 style={hStyle}>lobster</h1>
    //       </div>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //     {/* </div> */}
    //     {/* <div style={needHeight}> */}
    //     <div tabIndex="0" style={stickyStyle}>
    //         <h1 style={hStyle}>lobster</h1>
    //       </div>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //     {/* </div> */}
    //     {/* <div style={needHeight}> */}
    //     <div tabIndex="0" style={stickyStyle}>
    //         <h1 style={hStyle}>lobster</h1>
    //       </div>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //       <p tabIndex="0" style={hStyle}>poo</p>
    //     {/* </div> */}
    //   </div>
    // );

    return (
      <div {...customProps} {...attrSpread} className={tableClassNames} ref={refCallback} role="grid">
        {header}
        <div className={cx(['body'])} role="rowgroup" ref={this.bodyRef}>
          {children}
        </div>
      </div>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
