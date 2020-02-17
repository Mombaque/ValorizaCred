import React, { Component } from "react";

class NavbarButton extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="btn btn-primary btn-sn m-2"
        onClick={this.props.onClick}
      >
        {this.props.title}
      </button>
    );
  }
}

export default NavbarButton;
