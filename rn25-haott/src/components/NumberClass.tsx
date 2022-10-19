import React, { Component } from "react";

type Props = {};

type State = {
  numberState: number;
};

class BtNumber extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      numberState: 0,
    };
  }

  handleClick = () => {
    this.setState({ numberState: this.state.numberState + 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>CLICK</button>
        <p>{this.state.numberState}</p>
      </>
    );
  }
}

export default BtNumber;
