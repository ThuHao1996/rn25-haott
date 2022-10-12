import React, { Component } from "react";

type Props = {
    isLogin : boolean
};

type State = {};

class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div className="header bg-ccc h-100">
          <div className="header__heading text-white">The Pulpit Rock</div>
          {this.props.isLogin 
          ? <button className="btn btn-success">Login</button>
          :<button className="btn btn-danger">Logout</button>
        }
         </div>
      </>
    );
  }
}

export default Header;
