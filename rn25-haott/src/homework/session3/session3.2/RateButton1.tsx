import React, { Component } from "react";
import "./RateButton1.css";

type Props = {};

type State = {
  star: number;
};

class RateButton1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      star: 0,
    };
  }

  handleClick = () => {
    this.setState({ star: this.state.star + 1 });
  };

  render() {
    return (
      <>
        <div className="icon__list">
          {[...Array(5)]?.map((star, index) => {
            index = index + 1;
            return index <= this.state.star ? (
              <i
                onClick={this.handleClick}
                className="icon1 fa-solid fa-thumbs-up"
              ></i>
            ) : (
              <i
                onClick={this.handleClick}
                className="icon1 fa-regular fa-thumbs-up"
              ></i>
            );
          })}
        </div>
      </>
    );
  }
}

export default RateButton1;
