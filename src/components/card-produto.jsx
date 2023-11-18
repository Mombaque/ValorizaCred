import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import {WHATSAPP_URL} from '../App'
import '../css/card-produto.css'

function CardProduto(props) {
    return (
      <>
        <Card className="card-produto">
          <img className="card-imagem"
            onClick={() => navigate(props.url)}
            src={`/images/${props.image}`} 
            alt={props.image}/>
          {props.description}          
        </Card>
      </>
    );
  }

function navigate(url){
  url = !url || url === '' ? WHATSAPP_URL : url;
  window.open(url, "_blank");    
}

export default CardProduto;
