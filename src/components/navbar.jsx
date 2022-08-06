import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { AiOutlineWhatsApp } from "react-icons/ai";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image'

function NavBar(props) {
  const navigationItems = navItems(props.paginaAtual);
  return (
    <Navbar className="navbar">
      {logo}
      <div style={{width: "50%"}}></div>
      <Container>
        <Nav variant="tabs">
          {navigationItems.map(item => 
            navItem(item, props)
          )}
        </Nav>
        {whatsAppButton(props)}
      </Container>
    </Navbar>
  );
}

const logo = <Image src={`/images/logo.png`}/>

function navItems(paginaAtual){
  const itens = [
    criarItem("Produtos", 0, paginaAtual),
    criarItem("Quem somos", 1, paginaAtual),
  ];
  return itens;
}

function navItem(item, props){ 
  return (
    <Nav.Item style={{ backgroundColor: item.style.backgroundColor }}>
      <Nav.Link
        style={{ color: item.style.color }}
        onClick={() => props.mudarPagina(item.index)}>
        {item.descricao}
      </Nav.Link>
    </Nav.Item>);
}
  
function criarItem(desc, index, paginaAtual){
  return {
    descricao: desc,
    index: index,
    style: styleAba(paginaAtual, index),
  }
}

function styleAba(paginaAtual, index) {
  return paginaAtual === index 
  ? {backgroundColor: 'rgb(52, 58, 64)', color: 'white'}
  : {backgroundColor: 'lightgrey', color: 'black'} ;
}

function whatsAppButton(props){
  return <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}>
      <h1>
        <Badge style={{ paddingTop: "2px", cursor: "pointer" }} pill bg="success" onClick={props.onClickWhatsApp}>
          <AiOutlineWhatsApp />
        </Badge>
      </h1>
  </OverlayTrigger>;
    
  } 

  const renderTooltip = (props) => (
    <Tooltip style={{backgroundColor: "green"}} id="button-tooltip" {...props}>
      Iniciar conversa no WhatsApp
    </Tooltip>
  );

export default NavBar;
