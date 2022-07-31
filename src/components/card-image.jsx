import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class CardImage extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className="text-center">
        <Card.Header>{this.props.header}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text className="card-texto">
            {this.props.text}
          </Card.Text>
          <Button className="card-botao" variant="primary">Conheça</Button>
        </Card.Body>
      </Card>
    );
  
    return (
      <div className="card">
        <img src={this.props.imagePath} alt={this.props.alt} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.content}</p>
          {/* <a href="#" className="btn btn-primary">
            Faça uma simulação
          </a> */}
        </div>
      </div>
    );
  }
}

export default CardImage;
