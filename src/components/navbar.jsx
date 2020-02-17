import React, { Component } from "react";
import NavBarButton from "./navbar-button";

class NavBar extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  getLogo() {
    const logoStyle = { margin: "2px" };
    const prefixStyle = { fontSize: "30px", fontWeight: "bold" };
    const sufixStyle = {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#335AFF"
    };

    return (
      <div className="row" style={logoStyle}>
        <span style={prefixStyle}>Valoriza</span>
        <span style={sufixStyle}>Cred</span>
      </div>
    );
  }

  getButtons() {
    return (
      <div class="btn-group" role="group" aria-label="Basic example">
        <NavBarButton
          title="WhatsApp (15) 99741-3771"
          onClick={this.props.onClickWhatsApp}
        />
      </div>
    );
  }

  render() {
    return (
      <nav class="navbar sticky-top bg-light justify-content-between">
        {this.getLogo()}
        {this.getButtons()}
      </nav>
    );
  }
}

export default NavBar;
