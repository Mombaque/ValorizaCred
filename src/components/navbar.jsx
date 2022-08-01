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

function styleAba(paginaAtual, index) {
  return paginaAtual == index 
  ? {backgroundColor: '#335AFF', color: 'white'}
  : {backgroundColor: 'lightgrey', color: 'black'} ;
}

function NavBar(props) {
  function criarItem(desc, index){
    return {
      descricao: desc,
      index: index,
      style: styleAba(props.paginaAtual, index),
    }
  }

  const itemsAba = [
    criarItem("Produtos", 0),
    criarItem("Quem somos", 1),
  ];  

  return (
    <Navbar className="navbar">
      <Container>
        {getLogo()}  
        <Nav variant="tabs">

          {itemsAba.map(item => 
            <Nav.Item style={{backgroundColor: item.style.backgroundColor}}>
              <Nav.Link 
                style={{color: item.style.color}} 
                onClick={() => props.mudarPagina(item.index)}>
                  {item.descricao}
              </Nav.Link>
            </Nav.Item>
          )}

        </Nav>
        <Button variant="primary" onClick={props.onClickWhatsApp}>Clique aqui para falar pelo WhatsApp</Button>
      </Container>
      </Navbar>
  );
}

export default NavBar;
