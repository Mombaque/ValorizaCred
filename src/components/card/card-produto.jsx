import React from "react";
import Card from 'react-bootstrap/Card';
import {WHATSAPP_URL} from '../../App'
import '../../css/card-produto.css'

function CardProduto(props) {
    return (
      <>
        <Card className="card-produto">
          <img className="card-imagem"
            onClick={() => navigate(props.produto.url)}
            src={`/images/${props.produto.image}`} 
            alt={props.produto.image}/>
          {/* {props.produto.description}           */}
        </Card>
      </>
    );
  }

function navigate(url){
  url = !url || url === '' ? WHATSAPP_URL : url;
  window.open(url, "_blank");    
}

export default CardProduto;
