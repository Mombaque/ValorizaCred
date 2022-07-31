import React, { Component } from "react";
import NavBarButton from "./navbar-button";

class NavBar extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  getLogo() {
    const logoStyle = { margin: "2px", alignItems: "center" };
    const prefixStyle = { fontSize: "30px", fontWeight: "bold" };
    const sufixStyle = {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#335AFF",
      justifyContent: "center"
    };

    return (
      <div className="row" style={logoStyle}>
        <img src={"/images/logo.jpg"} alt="" />
        <span style={prefixStyle}>Valoriza</span>
        <span style={sufixStyle}>Cred</span>
      </div>
    );
  }

  // getLogo() {
  //   return (
  //     <div>
  //       <img src={"/images/logo.jpg"} alt="" />
  //     </div>
  //   );
  //}

  getButtons() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <NavBarButton
          title="WhatsApp (15) 99741-3771"
          onClick={this.props.onClickWhatsApp}
        />
      </div>
    );
  }

  render() {
    return (
      <nav className="navbar sticky-top bg-light justify-content-between">
        {this.getLogo()}
        {this.getButtons()}
      </nav>
    );
  }
}

export default NavBar;
