import React, { Component } from "react";
import CardProduto from "./card-produto";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {PRODUTOS} from '../App'

class Cards extends Component {
  state = {};

  getImage(file) {
    return `/images/${file}`;
  }

  render() {
    return (<Container>
      <Row>
        {PRODUTOS.map(x => (<CardProduto image={x.image}/>))}
      </Row>
    </Container>)
  }
}

export default Cards;
