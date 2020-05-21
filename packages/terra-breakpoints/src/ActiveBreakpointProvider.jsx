import React from 'react';
import PropTypes from 'prop-types';
import ActiveBreakpointContext from './ActiveBreakpointContext';
import { activeBreakpointForSize } from './breakpoints';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<ActiveBreakpointContext.Provider />`.
   */
  children: PropTypes.node,
};

class ActiveBreakpointProvider extends React.Component {
  constructor(props) {
    super(props);

    this.setActiveBreakpoint = this.setActiveBreakpoint.bind(this);
    this.setActiveBreakpointFromOrientationchange = this.setActiveBreakpointFromOrientationchange.bind(this);

    this.resizeInnerWidth = 0,
    this.orientationInnerWidth = 0,
    this.source = 'unknown',
    this.resizeCount = 0;
    this.orientationCount = 0;
    this.state = {
      activeBreakpoint: activeBreakpointForSize(window.innerWidth),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setActiveBreakpoint);
    window.addEventListener('orientationchange', this.setActiveBreakpoint);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setActiveBreakpoint);
    window.removeEventListener('orientationchange', this.setActiveBreakpoint);
  }

  setActiveBreakpoint() {
    const { activeBreakpoint } = this.state;
    const newBreakpoint = activeBreakpointForSize(window.innerWidth);
    this.resizeInnerWidth = newBreakpoint,
    this.source = 'resize',
    this.resizeCount = this.resizeCount + 1;
    

    if (activeBreakpoint !== newBreakpoint) {
      this.setState({
        activeBreakpoint: newBreakpoint,
      });
    }
  }

  setActiveBreakpointFromOrientationchange() {
    const { activeBreakpoint } = this.state;
    const newBreakpoint = activeBreakpointForSize(window.innerWidth);

    this.orientationInnerWidth = newBreakpoint,
    this.source = 'orientationchange',
    this.orientationCount = this.orientationCount + 1;

    if (activeBreakpoint !== newBreakpoint) {
      this.setState({
        activeBreakpoint: newBreakpoint,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { activeBreakpoint } = this.state;
    // const stateValue = {
    //   activeBreakpoint,
    //   innerWidth: this.innerWidth,
    //   source: this.source,
    //   resizeCount: this.resizeCount,
    //   orientationCount: this.orientationCount,
    // };

    return (
      <React.Fragment>
        <ActiveBreakpointContext.Provider value={activeBreakpoint} >
          {children}
        </ActiveBreakpointContext.Provider>
        The event (resize or orientationchange):
        {' '}
        {this.source}
        <br></br>
        <br></br>
        The resize innerWidth:
        {' '}
        {this.resizeInnerWidth}
        <br></br>
        <br></br>
        The orientation innerWidth:
        {' '}
        {this.orientationInnerWidth}
        <br></br>
        <br></br>
        The resizeCount:
        {' '}
        {this.resizeCount}
        <br></br>
        <br></br>
        The orientationCount:
        {' '}
        {this.orientationCount}
      </React.Fragment>
        
    );
  }
}

ActiveBreakpointProvider.propTypes = propTypes;

export default ActiveBreakpointProvider;
