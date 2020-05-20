import React from 'react';
import ButtonGroup from '../../../ButtonGroup';

let returnButtonProps = {
  text: 'Return',
};
const returnDisabledDefaultProps = () => {
  returnButtonProps = {
    isDisabled: true,
    text: 'Disabled',
  };
};

const returnBlurredDefaultProps = () => {
  returnButtonProps = {
    text: 'Blurred',
  };
};

class ButtonGroupIsBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: [] };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSelection(event, key) {
    event.preventDefault();
    this.setState(prevState => ({ selectedKeys: ButtonGroup.Utils.handleMultiSelectedKeys(prevState.selectedKeys, key) }));
  }

  handleClick() {
    returnDisabledDefaultProps();
    this.forceUpdate();
  }

  handleBlur() {
    returnBlurredDefaultProps();
    this.forceUpdate();
  }

  render() {
    return (
      <ButtonGroup
        id="button-block-group"
        isBlock
        onChange={this.handleSelection}
        selectedKeys={this.state.selectedKeys}
      >
        <ButtonGroup.Button text="Button 1" key="single-select1" />
        <ButtonGroup.Button text="Button 2" onClick={this.handleClick} onBlur={this.handleBlur} key="single-select2" {...returnButtonProps} />
        <ButtonGroup.Button text="Button 3" key="single-select3" />
      </ButtonGroup>
    );
  }
}
export default ButtonGroupIsBlock;
