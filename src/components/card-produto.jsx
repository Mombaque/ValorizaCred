import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import {WHATSAPP_URL} from '../App'
import '../css/card-produto.css'

class CardProduto extends Component {
  render() {
    return (
      <>
        <Card class="card-produto">
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
