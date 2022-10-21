import React, { Component } from "react";
import "./LikeButton1.css";

type Props = {};

type State = {
  isLike: boolean;
};

export class LikeButton1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLike: false,
    };
  }

  handleClick = () => {
    this.setState((prevState: State) => ({
      isLike: !prevState.isLike,
    }));
  };

  render() {
    return (
      <>
        <button className="btn" onClick={this.handleClick}>
          {this.state.isLike ? "Unlike" : "Like"}
        </button>
        {this.state.isLike ? (
          <i className="icon__name icon1 fa-solid fa-thumbs-up"></i>
        ) : (
          <i className="icon__name icon2 fa-regular fa-thumbs-up"></i>
        )}
      </>
    );
  }
}

export default LikeButton1;
