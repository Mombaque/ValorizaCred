import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {WHATSAPP_URL} from '../App'
import '../css/card-produto.css'

class CardProduto extends Component {
  render() {
    return (
      <>
        <Card>
          {/* <Card.Header className="card-header">
            <h4>{this.props.icon}{' '}{this.props.header}</h4>
          </Card.Header> */}
          <img className="card-imagem" 
            onClick={() => this.navigate(this.props.url)}
            src={`/images/${this.props.image}`} 
            alt={this.props.image}/>
          <Card.Body>
            <Card.Title className="card-title">{this.props.title}</Card.Title>
            <Card.Text className="card-texto">
              {this.props.text}
            </Card.Text>
          </Card.Body>
          {/* <Button className="botao-saiba-mais" variant="dark" 
            onClick={() => this.navigate(this.props.url)}>Saiba mais</Button> */}
        </Card>
      </>
    );
  }

  navigate(url){
    url = !url || url === '' ? WHATSAPP_URL : url;
    window.open(url, "_blank");    
  }
}

export default CardProduto;
