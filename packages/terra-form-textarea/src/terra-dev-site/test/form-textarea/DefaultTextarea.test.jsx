import React from 'react';

import Textarea from '../../../Textarea';

class textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [1, 3],
      firstTextArea: true,
      smallValue: "small",
      largeValue: "large"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ firstTextArea: !this.state.firstTextArea })
  }

  smallTextArea(e) {
    this.setState({ smallValue: e.target.value })
  }

  largeTextArea(e) {
    this.setState({ largeValue: e.target.value })
  }
  
  render() {

    let textArea = []
    if (this.state.firstTextArea == true) {
      textArea[0] = <Textarea id='textarea1' rows={this.state.order[0]} defaultValue={this.state.smallValue} value={this.state.smallValue} onChange={this.smallTextArea.bind(this)}/>
      textArea[1] = <Textarea id='textarea2' rows={this.state.order[1]} defaultValue={this.state.largeValue} value={this.state.largeValue} onChange={this.largeTextArea.bind(this)}/>
    }
    else {
      textArea[0] = <Textarea id='textarea2' rows={this.state.order[1]} defaultValue={this.state.largeValue} value={this.state.largeValue} onChange={this.largeTextArea.bind(this)}/>
      textArea[1] = <Textarea id='textarea1' rows={this.state.order[0]} defaultValue={this.state.smallValue} value={this.state.smallValue} onChange={this.smallTextArea.bind(this)}/>
    }

    // if (this.state.firstTextArea == true) {
    //   textArea[0] = <Textarea style = {{minHeight : "28px"}} id='textarea1' rows={this.state.order[0]} defaultValue={this.state.smallValue} value={this.state.smallValue} onChange={this.smallTextArea.bind(this)}/>
    //   textArea[1] = <Textarea style = {{minHeight : "68px"}} id='textarea2' rows={this.state.order[1]} defaultValue={this.state.largeValue} value={this.state.largeValue} onChange={this.largeTextArea.bind(this)}/>
    // }
    // else {
    //   textArea[0] = <Textarea style = {{minHeight : "68px"}} id='textarea2' rows={this.state.order[1]} defaultValue={this.state.largeValue} value={this.state.largeValue} onChange={this.largeTextArea.bind(this)}/>
    //   textArea[1] = <Textarea style = {{minHeight : "28px"}} id='textarea1' rows={this.state.order[0]} defaultValue={this.state.smallValue} value={this.state.smallValue} onChange={this.smallTextArea.bind(this)}/>
    // }

    return (
      <div>
        {textArea}
        <button onClick={this.handleClick} type="button">Swap</button>
      </div>
    );
  }
}

export default textarea;
