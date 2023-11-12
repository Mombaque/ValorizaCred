import React, { Component } from "react";
import CardProduto from "./card-produto";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {PRODUTOS} from '../App'

function Cards() {
  return (
    <>
        {PRODUTOS.map(x => (<CardProduto image={x.image}/>))}
    </>
    // <Container>
    //     <Row>
          
    //     </Row>
    //   </Container>
    )
}

export default Cards;
