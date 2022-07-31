import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function getLogo() {
  const logoStyle = { margin: "30px", alignItems: "center" };
  return (
    <div className="row" style={logoStyle}>
      <span className="navbar-prefixo">Valoriza</span>
      <span className="navbar-sufixo">Cred</span>
    </div>
  );
}

function NavBar(props) {
  return (
    <Navbar className="navbar">
        <Container>
          {getLogo()}            
          <Nav className="me-auto">
            <Nav.Link onClick={() => props.mudarPagina(0)}>Produtos</Nav.Link>
            <Nav.Link onClick={() => props.mudarPagina(1)}>Quem somos</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={props.onClickWhatsApp}>Conversar no WhatsApp</Button>
        </Container>
      </Navbar>
  );
}

export default NavBar;
