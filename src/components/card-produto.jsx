import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import {WHATSAPP_URL} from '../App'
import '../css/card-produto.css'

function CardProduto(props) {
    return (
      <>
        <Card>
          <img 
            onClick={() => navigate(props.url)}
            src={`/images/${props.image}`} 
            alt={props.image}/>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }

function navigate(url){
  url = !url || url === '' ? WHATSAPP_URL : url;
  window.open(url, "_blank");    
}

export default CardProduto;
