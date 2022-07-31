import React, { Component } from "react";
import Botao from "./botao";

class NavbarButton extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Botao click={this.props.onclick} texto="Conversar no WhatsApp"/>
    );
  }
}

export default NavbarButton;
