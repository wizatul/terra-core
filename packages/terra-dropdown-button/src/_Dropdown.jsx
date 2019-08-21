import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import Hookshot from 'terra-hookshot';
import Overlay from 'terra-overlay';
import DropdownList from './_DropdownList';

const propTypes = {
  /**
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func.isRequired,
  /**
   * Ref to attach the dropdown to
   */
  targetRef: PropTypes.func.isRequired,
  /**
   * Whether or not the dropdown should be open
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * The Options that should be displayed in the dropdown
   */
  children: PropTypes.node.isRequired,
  /**
   * @private
   * Width to set the dropdown to. Used when `isBlock` is true. Unset means to autosize.
   */
  width: PropTypes.string,
};

const Dropdown = ({
  requestClose, isOpen, targetRef, children, width,
}) => (
  <React.Fragment>
    <Overlay
      isOpen={isOpen}
      backgroundStyle="clear"
      zIndex="7000"
      onRequestClose={requestClose}
    />
    <Hookshot
      isOpen={isOpen}
      isEnabled
      targetRef={targetRef}
      attachmentBehavior="flip"
      contentAttachment={{ vertical: 'top', horizontal: 'start' }}
      targetAttachment={{ vertical: 'bottom', horizontal: 'start' }}
    >
      <Hookshot.Content>
        <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true, clickOutsideDeactivates: true }}>
          <DropdownList
            requestClose={requestClose}
            width={width}
          >
            {children}
          </DropdownList>
        </FocusTrap>
      </Hookshot.Content>
    </Hookshot>
  </React.Fragment>
);

Dropdown.propTypes = propTypes;

export default Dropdown;
