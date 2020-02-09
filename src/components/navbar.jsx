import React, { Component } from "react";
import NavBarButton from "../components/whatsappButton";

const NavBar = () => {
  const prefixStyle = { fontWeight: "bold" };
  const sufixStyle = { fontWeight: "bold", color: "#335AFF" };

  return (
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">
        <div className="row">
          <span style={prefixStyle}>Valoriza</span>
          <span style={sufixStyle}>Cred</span>
        </div>
      </a>

      <div class="btn-group" role="group" aria-label="Basic example">
        <NavBarButton title="Whatsapp (15) 99741-3771" />
        <NavBarButton title="Faça uma simulação" />
      </div>
    </nav>
  );
};

export default NavBar;
