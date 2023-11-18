import React, { Component } from "react";
import CardProduto from "./card-produto";
import {PRODUTOS} from '../App'

function Cards() {
  return (
    <>
        {PRODUTOS.map(x => (<CardProduto image={x.image} description={x.description}/>))}
    </>
    )
}

export default Cards;
