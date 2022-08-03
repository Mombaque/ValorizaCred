import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CardProduto extends Component {
  render() {
    return (
      <Card style={{backgroundColor: "#f8f9fa"}}>
        <Card.Header className="card-header">
          <h4>{this.props.icon}{' '}{this.props.header}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-title">{this.props.title}</Card.Title>
          <Card.Text className="card-texto">
            {this.props.text}
          </Card.Text>
          <Button variant="dark">Saiba mais</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardProduto;
